import { Route, Routes, useLocation } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SelectChoice from "./pages/SelectChoice"
import HomePage from "./pages/HomePage"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import MoviePage from "./pages/MoviePage"

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn && (location.pathname === '/' || location.pathname === '/select' || location.pathname === '/movie')) {
      navigate('/signup')
    }
    if (isLoggedIn && location.pathname === '/signup') {
      navigate('/')
    }
  }, [isLoggedIn, location.pathname, navigate])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/select" element={<SelectChoice />} />
        <Route path="/movie" element={<MoviePage />} />
      </Routes>
    </>
  )
}

export default App
