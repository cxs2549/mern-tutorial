import { useState, useEffect } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { FaUser } from "react-icons/fa"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      navigate("/")
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="p-8">
        <div className="flex items-center justify-center mb-4 gap-2 text-xl font-bold">
          <FaSignInAlt /> <p>Login</p>
        </div>
      </section>
      <section>
        <form onSubmit={onSubmit} className="mx-4 flex flex-col gap-4">
          <div>
            <input
              className="border w-full py-2 px-4 rounded"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={onChange}
            />
          </div>
          <div>
            <input
              className="border w-full py-2 px-4 rounded"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            />
          </div>
          <div>
            <button
              className="block bg-gray-500 w-full py-2 text-white font-bold rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
export default Login
