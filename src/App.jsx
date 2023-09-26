import { Routes, Route } from "react-router-dom";
import MainForm from "./components/MainForm";
import WrongPage from "./components/WrongPage";
import SignIn from "./components/SignIn";


export default function App(){


  return(
    <>
    <Routes>
      <Route
      path="/"
      element={<MainForm/>}
      />
      <Route
      path="/signin"
      element={<SignIn/>}
      />
      <Route
      path="*"
      element={<WrongPage/>}
      />
    </Routes>
    </>
  )
}
