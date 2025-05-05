import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/Layout.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import SignUp from "./pages/signup/SignUp.jsx";

function App() {

  return (
    <>
<BrowserRouter basename='/vrstory/'>
  <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='SignIn' element={<SignIn/>}/>
    <Route path='SignUp' element={<SignUp/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
