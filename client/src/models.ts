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
  user: IUser | null,
  token: string | null,
  isLoading: boolean,
  status: string | null,
}

export type AuthResponse = {
  token: never, 
  user: IUser, 
  message: string,
}
  