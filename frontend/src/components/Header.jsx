import { FaSignOutAlt, FaSignInAlt, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

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

const Nav = () => {
  return (
    <nav className="flex items-center gap-6">
      <Link to="/login" className="flex text-sm items-center gap-2">
        <FaSignInAlt size={20} />
        <p>Login</p>
      </Link>
      <Link to="/register" className="flex text-sm items-center gap-2">
        <FaUser size={20} />
        <p>Register</p>
      </Link>
    </nav>
  )
}

const Header = () => {
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
