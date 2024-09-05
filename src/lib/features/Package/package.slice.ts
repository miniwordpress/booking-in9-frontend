import { createSlice } from "@reduxjs/toolkit"
import { IReduxPackage } from "./package"
import { searchPackages, findPackage } from "./package.query"
import dayjs from "dayjs"

const reducerName = "packages"
export const initialState: IReduxPackage.IInitialState = {
  packages: [],
  find_package: {},
  tabselect: "Oversea",
  numofpeople: 0,
  form_overseal: {
    destination: "Oversea",
    traveler_type: "Individual",
    travel_type: "Single",
    maximum_duration: 60,
    departure_country: "Thailand",
    arrival_country: [],
    departure_date: dayjs(),
    arrival_date: dayjs(),
    number_of_person: 1,
    range_of_months: 0,
    promotion_code: "",
  },
  form_domestic: {
    destination: "Domestic",
    traveler_type: "Individual",
    travel_type: "Single",
    maximum_duration: 60,
    departure_province: 0,
    arrival_province: 0,
    departure_date: dayjs(),
    arrival_date: dayjs(),
    number_of_person: 1,
    range_of_months: 0,
    promotion_code: "",
  },
  form_arrival: {
    destination: "Arrival",
    traveler_type: "Individual",
    travel_type: "Single",
    maximum_duration: 60,
    departure_country: 0,
    arrival_country: "Thailand",
    departure_date: dayjs(),
    arrival_date: dayjs(),
    number_of_person: 1,
    range_of_months: 0,
    promotion_code: "",
  },
  plan_information: {
    destination: "Oversea",
    traveler_type: "Individual",
    travel_type: "Single",
    maximum_duration: 60,
    departure_country: "Thailand",
    arrival_country: [],
    departure_province: 0,
    arrival_province: 0,
    departure_date: dayjs(),
    arrival_date: dayjs(),
    number_of_person: 1,
    range_of_months: 0,
    promotion_code: "",
  }
}

export const packagesSlice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    updateFormOversea: (state, { payload }) => {
      state.form_overseal = { ...payload }
      state.tabselect = "Oversea"
      state.numofpeople = payload?.number_of_person
      state.plan_information = { ...payload }
    },
    updateFormDomestic: (state, { payload }) => {
      state.form_domestic = { ...payload }
      state.tabselect = "Domestic"
      state.numofpeople = payload?.number_of_person
      state.plan_information = { ...payload }
    },
    updateFormArrival: (state, { payload }) => {
      state.form_arrival = { ...payload }
      state.tabselect = "Arrival"
      state.numofpeople = payload?.number_of_person
      state.plan_information = { ...payload }
    },
    updateTab: (state, { payload }) => {
      state.tabselect = payload
    },
  },
  extraReducers: (buider) => {
    buider.addMatcher(
      searchPackages.matchFulfilled,
      (state, { payload }: any) => {
        state.packages = [...payload.packages]
      }
    )
    buider.addMatcher(
      findPackage.matchFulfilled,
      (state, { payload }: any) => {
        state.find_package = { ...payload.package }
      }
    )
  },
})

export const packagesSliceReducer = { [reducerName]: packagesSlice.reducer }
export const { updateFormArrival, updateTab, updateFormOversea, updateFormDomestic } = packagesSlice.actions