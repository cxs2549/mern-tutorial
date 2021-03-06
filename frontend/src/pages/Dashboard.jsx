import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import GoalForm from "../components/GoalForm"
import Spinner from "../components/Spinner"
import {reset, getGoals} from '../features/goals/goalSlice'
import GoalItem from "../components/GoalItem"


const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (!user) {
      navigate("/login")
    }

    dispatch(getGoals())
    
    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <section>
        <h1 className="text-2xl font-bold mb-4">
          Welcome, {user && user.name}!
        </h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section>
        {goals.length > 0 ? (
          <div className="flex flex-col gap-4">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (<h3>You have not set any goals.</h3>)}
      </section>
    </div>
  )
}
export default Dashboard
