export interface IUserAuth {
  username: string;
  password: string;
}
  
export interface IPost{
  username: string,
  title: string,
  text: string,
  imgUrl: string,
  views: number,
  author: string,
  comments: Array<string>,
}
  
export interface IUser {
  username: string,
  password: string,
  posts: Array<IPost>,
} 

export type State = {
  user: null,
  token: null,
  isLoading: boolean,
  status: null,
}
  
export type Action = {
    payload: { 
      message: string | null,
      user: string | null,
      token: string | null,
    }; 
}

export type LoginResponse = {
    token: never, 
    user: IUser, 
    message: string,
  }
  