export interface IMessage {
  id?: string;
  username: string;
  message: string;
}

export interface IMessages {
  messages: Array<IMessage>
}