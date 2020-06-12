import SockJSClient from '../libs/SockJsClient';
import config from '../config.json';
import * as GameActions from '../containers/Game/actions';

class SocketController {
    constructor() {
        this.sockJSClient = new SockJSClient();
        this.dispatch = null;

        this.connect = this.connect.bind(this);
        this.recvStartGame = this.recvStartGame.bind(this);
    }

    connect(username, dispatch) {
        this.dispatch = dispatch;

        const subscribes = [
            {
                link: '/user/queue/startGame',
                handler: this.recvStartGame
            }
        ];
        this.sockJSClient.connect(config.socketServer, username, subscribes);
    }

    recvStartGame(invitation) {
        console.log(`Recv start game: ` , invitation);
        GameActions.addInvitation(invitation)(this.dispatch);
    }
}

export default new SocketController();