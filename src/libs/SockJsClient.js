import SockJS from 'sockjs-client';
import Stomp from 'stomp-websocket';

class SockJsClient {
    constructor() {
        this.sock = null;
        this.stompClient = null;
        this.subscribes = [];
        this.isConnected = false;

        this.connect = this.connect.bind(this);
        this.onConnect = this.onConnect.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.send = this.send.bind(this);
    }

    /*
        url: URL to connect
        username: Username that connects
        subscribes: [
            {
                link: "/path",
                handler: (msg: JSON) => {...}
            },
            ...
        ]
    */
    connect(url, username, subscribes) {
        this.subscribes = subscribes;
        this.sock = new SockJS(url);
        this.stompClient = Stomp.over(this.sock);
        this.stompClient.connect({user: username}, this.onConnect);
    }

    onConnect(frame) {
        this.isConnected = true;

        // Subscribes
        for(let subscribe of this.subscribes) {
            const { link, handler } = subscribe;
            this.stompClient.subscribe(link, (msg) => handler(JSON.stringify(msg.body)));
        }
    }

    disconnect() {
        if(this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        this.isConnected = false;
    }

    send(path, data) {
        data = JSON.stringify(data);
        this.stompClient.send(path, {}, data);
    }
}

export default SockJsClient;