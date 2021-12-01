export interface IMessageTransformed {
  id: string | number;
  username: string;
  message: string;
}

export interface IMessage {
  id?: string | number;
  attributes: {
    username: string;
    message: string;
    createdAt?: string;
    updatedAt?: string;
  }
}

export interface IMessages {
  data: Array<IMessage>;
  pagination: {
    page: number;
    pageCount:number;
    pageSize:number;
    total:number
  }
}
