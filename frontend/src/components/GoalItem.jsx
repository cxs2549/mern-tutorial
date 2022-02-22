import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'
import {BsTrash} from 'react-icons/bs'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='bg-red-100 py-4 flex flex-col gap-4 relative'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='absolute top-3 right-4'>
        <BsTrash />
      </button>
    </div>
  )
}

export default GoalItem