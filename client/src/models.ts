export interface IUserAuth {
  username: string;
  password: string;
}

export interface INewPost {
  image?: File | null;
  title: string;
  text: string;
  topic: string;
}

export interface IUpdatedPost {
  title: string;
  text: string;
  topic: string;
  id: string;
}

export interface IPost {
  username: string;
  title: string;
  text: string;
  imgUrl: string;
  views: number;
  likes: number;
  author: string;
  comments: Array<string>;
  topic: string;
}

export interface IUser {
  username: string;
  password: string;
  posts: Array<IPost>;
}

export type State = {
  user: IUser | null;
  token: string | null;
  isLoading: boolean;
  status: string | null;
};

export type StatePost = {
  posts: Array<IPost>;
  popularPosts: Array<IPost>;
  topicPosts: Array<IPost>;
  loading: boolean;
};

export type AuthResponse = {
  token: never;
  user: IUser;
  message: string;
};

export type PostResponse = {
  token: never;
  user: IUser;
  message: string;
};
