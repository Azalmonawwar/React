import { Link } from "react-router-dom"
import { useUser } from "./context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
function App() {
  const navigate = useNavigate()
  const { user, setUser, setIsLogIn, isLogIn } = useUser()
  const logout = () => {
    setUser('')
    setIsLogIn(false)
  }

  useEffect(() => {
    if (!isLogIn) {
      navigate('/login')
    }

  }, [isLogIn])

  if (!user) {
    return (
      <>
        Please login .....
        <Link to={'/login'}>go to Login</Link>
      </>)
  }
  return (
    <>
      Profile Page : {user}
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default App
