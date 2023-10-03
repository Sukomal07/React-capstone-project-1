import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SelectChoice from "./pages/SelectChoice"


function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/select" element={<SelectChoice />} />
      </Routes>
    </>
  )
}

export default App
