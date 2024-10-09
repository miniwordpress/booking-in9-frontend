import { Typography, Button, Input } from "@material-tailwind/react"
import { useState } from "react"
import { useTestMailMutation } from "@/lib/features/Mock"
import TestComponent from "@/components/testComponent"

export default function TestReduxPage() {
  const [to, setTo] = useState("")
  const [from, setFrom] = useState("")
  const [subject, setSubject] = useState("")
  const [text, setText] = useState("")
  const [test, setTest] = useState("send mail")
  const [testMail] = useTestMailMutation()

  const testSubmit = () => {
    console.log("to => " + to)
    console.log("from => " + from)
    console.log("subject => " + subject)
    console.log("text => " + text)
    testMail({ to, from, subject, text })
  }

  return (
    <>
      <form className="mt-8 mb-2 h-screen w-96 ">
        <div className="mb-1 items-center justify-center flex-col gap-6 ">
          <Typography className="text-[110%] font-bold">
            To
          </Typography>
          <Input
            label="To"
            placeholder="to"
            type="text"
            value={to}
            onChange={e => { setTo(e.target.value) }}
          />
          <Typography className="text-[110%] font-bold">
            From
          </Typography>
          <Input
            label="From"
            placeholder="From"
            type="text"
            value={from}
            onChange={e => { setFrom(e.target.value) }}
          />
          <Typography className="text-[110%] font-bold">
            Subject
          </Typography>
          <Input
            label="Subject"
            placeholder="Subject"
            type="text"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
          />
          <Typography className="text-[110%] font-bold">
            Text
          </Typography>
          <Input
            label="Text"
            placeholder="Text"
            type="text"
            value={text}
            onChange={e => { setText(e.target.value) }}
          />
          <Button
            className="mt-2 bg-gradient-to-r from-cyan-500 via-purple-300 to-pink-300 text-[100%] font-semibold"
            fullWidth
            onClick={testSubmit}
          >
            {test}
          </Button>
          <br></br>
          <br></br>
          <br></br>
          <TestComponent text={text} test={test} setTest={setTest} />
        </div>
      </form>
    </>
  )
}