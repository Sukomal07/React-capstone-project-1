import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SelectChoice from "./pages/SelectChoice"
import HomePage from "./pages/HomePage"


function App() {
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
