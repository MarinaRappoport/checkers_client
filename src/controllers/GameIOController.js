import SockJSClient from '../libs/SockJsClient';
import config from '../config.json';

/*
    API:
     1. Listen to event: GameIOController.bindAction( path, (body) => {...} )
*/
class GameIOController {
    constructor() {
        // Init vars
        this.sockJSClient = new SockJSClient();
        this.dispatch = null;
        this.bindedActions = {};

        // Binding functions
        this.connect = this.connect.bind(this);
        this.bindAction = this.bindAction.bind(this);
        this.invitePlayer = this.invitePlayer.bind(this);
    }

    connect(username, dispatch) {
        this.dispatch = dispatch;

        /* Dynamic loading links */
        const links = Object.entries(config.socketListen).map(([key, val]) => val);
        const subscribes = links.map(link => ({
            link,
            handler: this.handleLink(link)
        }));

        this.sockJSClient.connect(config.socketServer, username, subscribes);
    }

    handleLink(link) {
        if(!(link in this.bindedActions)) { // If not found link's binded function
            return () => console.log(`Recived message from ${link}`);
        }

        // If found link's binded action
        return this.bindedActions[link];
    }

    bindAction(on, action) {
        this.bindedActions[on] = action;
    }

    invitePlayer(player) {
        const data = {
            toUser: player.username
        };
        this.sockJSClient.send(config.paths.invitePlayer, data);
    }

    acceptPlayer(playerUsername) {
        const data = {
            toUser: playerUsername
        };
        this.sockJSClient.send(config.paths.acceptPlayer, data);
    }
}

export default new GameIOController();