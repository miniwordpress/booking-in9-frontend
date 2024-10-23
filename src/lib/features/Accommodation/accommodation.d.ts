declare namespace IReduxAccommodation {
  export interface IInitialState {
    baseResponse: BaseResponse,
  }
  export interface BaseResponse {
    code: string,
    data: string?,
    message: string?,
    cause: string?
  }
}

export { IReduxAccommodation }
