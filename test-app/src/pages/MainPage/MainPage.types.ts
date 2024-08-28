interface IPostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IPostsArray {
  userPosts: IPostData[];
}
