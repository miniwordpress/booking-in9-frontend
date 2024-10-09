import React from 'react'
import { Typography, Input } from "@material-tailwind/react"
import { useAppSelector } from "@/lib/hooks"
import { RootState } from "@/lib/store"
import { IReduxTestmail } from "@/lib/features/Mock/mock"
import { useState, Dispatch, SetStateAction } from "react"

interface PropsType {
  text: string
  test: string,
  setTest: Dispatch<SetStateAction<string>>
}

const TestComponent: React.FC<PropsType> = (props: PropsType) => {
  const { test, setTest, text } = props
  // const [test, setTest] = useState("")

  const res: IReduxTestmail.IInitialState = useAppSelector((state: RootState) => state.mock)

  return (
    <>
      <Typography className="text-[110%] font-bold">
        {res.testMail.message + " " + text}
      </Typography>
      <Input
        label="To"
        placeholder="to"
        type="text"
        value={test}
        onChange={e => { setTest(e.target.value) }}
      />
    </>
  )
}

export default TestComponent