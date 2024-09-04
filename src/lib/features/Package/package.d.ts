import { packages, formOversea, formDomestic, formArrival, find_package } from "@utils/inteface"

declare namespace IReduxPackage {
  export interface IInitialState {
    packages: packages[]
    find_package: find_package
    tabselect: string
    form_overseal: formOversea
    form_domestic: formDomestic
    form_arrival: formArrival
    plan_information: formArrival & formDomestic & formOversea
    numofpeople: number
  }
}

export { IReduxPackage }
