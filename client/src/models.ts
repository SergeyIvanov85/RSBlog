export interface ICommentPost {
  postId: string;
  comment: string;
}
export interface IComment {
  comment: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export interface IUserAuth {
  username: string;
  password: string;
}
export interface IUpdatedPost {
  title: string;
  text: string;
  topic: string;
  id: string;
}

export interface IID {
  $oid: string;
}
export interface IPost {
  _id: IID;
  id: string;
  username: string;
  title: string;
  text: string;
  imgUrl: string;
  views: number;
  likes: number;
  author: string;
  comments: Array<string>;
  topic: string;
  createAt: string;
  updateAt: string;
  __v: number;
}

export interface IAllPosts {
  posts: IPost[];
  popularPosts: IPost[];
  topicPosts: IPost[];
}

export interface IUser {
  username: string;
  password: string;
  posts: Array<IPost>;
  _id?: string;
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

export type StateComment = {
  comments: IComment[];
  loading: boolean;
};

export type AuthResponse = {
  token: string | null;
  user: IUser;
  message: string;
};

export type PostResponse = {
  token: string | null;
  user: IUser;
  message: string;
};

export type GetMeResponse = {
  token: string | null;
  user: IUser;
};
