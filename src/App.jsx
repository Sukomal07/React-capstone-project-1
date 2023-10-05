import { Route, Routes, useLocation } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SelectChoice from "./pages/SelectChoice"
import HomePage from "./pages/HomePage"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
  const location = useLocation();
  function checkRoute() {
    if (!isLoggedIn && location.pathname === '/') {
      navigate('/signup')
    }
  }

  useEffect(() => {
    checkRoute()
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/select" element={<SelectChoice />} />
      </Routes>
    </>
  )
}

export default App
