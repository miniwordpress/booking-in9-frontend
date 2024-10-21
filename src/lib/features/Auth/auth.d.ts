declare namespace IReduxAuth {

  export interface IInitialState {
    baseResponse: BaseResponse
  }
  export interface BaseResponse {
    code: string,
    data: string?,
    message: string?,
    cause: string?
  }
}

export { IReduxAuth }
