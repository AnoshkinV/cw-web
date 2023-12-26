

export interface IUser {
      id: number,
      username: string,
      email: string,
      password: string,
      avatar: string
}


export interface IUserInfo {
    postCount: number,
    subscriberCount: number,
    user: IUser
}


export interface IResponse {
    token: string,
    user: IUser
}


export interface IPost {
    id: number,
    post_image: string | null,
    post_text: string,
    user_id: number,
    user: IUser
}