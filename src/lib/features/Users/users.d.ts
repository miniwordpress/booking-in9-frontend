declare namespace IReduxUsers {
  export interface IInitialState {
   createUser: CreateUser,
  }
  export interface CreateUser {
    code: string,
    data: string?,
    message: string?,
    cause: string?
  }
}

export { IReduxUsers }
