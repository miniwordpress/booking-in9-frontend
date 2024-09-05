import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query"
import { getLocale } from "@/utils/cookies"

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
  prepareHeaders(headers) {
    headers.set("x-localization", getLocale() as string)
    return headers
  },
})

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 403 && window)
    window.location.href = "/403"
  else if (result.error && result.error.status === 404 && window)
    window.location.href = "/404"

  return result
}

export default customFetchBase
