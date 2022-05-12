import config from '../config/config.json';

export enum TypeChatMessage {
  // eslint-disable-next-line no-unused-vars
   GLOBAL = 'GLOBAL',
   // eslint-disable-next-line no-unused-vars
   PERSONAL = 'PERSONAL',
}

type TypeMessage = {
  readonly messageType: TypeChatMessage.PERSONAL | TypeChatMessage.GLOBAL,
  readonly login:string,
  readonly mess:string,
  readonly event:string,
}

export type TypeChatResponse = {
  readonly messageType: TypeChatMessage.GLOBAL | TypeChatMessage.PERSONAL,
  readonly login: string,
  readonly message: string,
}

export default class WebSocketHelper {
  private socket : WebSocket;

  constructor(
      private login:string,
      private funcSetter:Function,
  ) {
    const address = `${config.WEBSOCKET_ADDRESS}`;
    const socket = new WebSocket(address);
    socket.onopen = () => {
      const message : TypeMessage = {
        login,
        messageType: TypeChatMessage.GLOBAL,
        mess: `${login} connected`,
        event: 'broadcastNeighbours',
      };
      // console.log('socket opened');
      socket.send(JSON.stringify(message));
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      funcSetter((prev: TypeChatResponse[]) => [...prev, message]);
    };
    this.socket = socket;
  }

  public sendMessage(text:string) {
    const message : TypeMessage = {
      login: this.login,
      messageType: TypeChatMessage.PERSONAL,
      mess: text,
      event: 'broadcastAll',
    };
    this.socket.send(JSON.stringify(message));
  }

  public disconnect() {
    const message : TypeMessage = {
      login: this.login,
      messageType: TypeChatMessage.GLOBAL,
      mess: `${this.login} left the chat`,
      event: 'broadcastNeighbours',
    };
    this.socket.send(JSON.stringify(message));
    this.socket.close();
  }
}

// import { io } from 'socket.io-client';
// import config from '../config/config.json';
// export default class ChatService {
//   // static async begin() {
//   //   const address = `${config.SERVER_ADDRESS}`;
//   //   const socket = io(address, { autoConnect: false });
//   //   socket.onAny((event, ...args) => {
//   //     console.log(event, args);
//   //   });
//   //   socket.connect();
//   //   socket.emit('message', 'Hallo Welt!');
//   // }
//
//   static connect(login) {
//     const address = `${config.WEBSOCKET_ADDRESS}`;
//     const socket = new WebSocket(address);
//     socket.onopen = () => {
//       const message = {
//         userId: localStorage.getItem('userId'),
//         login,
//         mess: `${login} connected`,
//         event: 'broadcastMessage',
//       };
//       // console.log('socket opened');
//       socket.send(JSON.stringify(message));
//     };
//
//     // socket.onclose = () => {
//     //   console.log('socket closed');
//     // };
//
//     return socket;
//   }
//
//   // static disconnect(){
//   //
//   // }
//
// }
