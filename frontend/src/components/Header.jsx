import { FaSignOutAlt, FaSignInAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

const Container = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto flex items-center justify-between h-full px-4">
      {children}
    </div>
  )
}

const Logo = () => {
  return (
    <div className="logo font-bold text-xl">
      <Link to="/">Goalsetter</Link>
    </div>
  )
}

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }
  const Nav = () => {
    return (
      <nav className="flex items-center gap-6">
        {user ? (
          <button
            onClick={onLogout}
            className="flex text-sm items-center gap-2"
          >
            <FaSignOutAlt size={20} />
            <p>Logout</p>
          </button>
        ) : (
          <>
            <Link to="/login" className="flex text-sm items-center gap-2">
              <FaSignInAlt size={20} />
              <p>Login</p>
            </Link>
            <Link to="/register" className="flex text-sm items-center gap-2">
              <FaUser size={20} />
              <p>Register</p>
            </Link>
          </>
        )}
      </nav>
    )
  }
  return (
    <header className="border-b h-20">
      <Container>
        <Logo />
        <Nav />
      </Container>
    </header>
  )
}
export default Header
