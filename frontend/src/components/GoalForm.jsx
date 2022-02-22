import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from "../features/goals/goalSlice"

const GoalForm = () => {
  const [text, setText] = useState("")

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createGoal({ text }))
    setText("")
  }
  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col">
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border py-2 px-4 rounded"
            placeholder="Enter a new goal"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 w-full mt-4 font-bold text-white py-2 px-4 rounded"
          >
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}
export default GoalForm
