import { nationality } from "@utils/inteface"

declare namespace IReduxNationality {
  export interface IInitialState {
    nationalities: nationality[]
  }
}

export { IReduxNationality }
