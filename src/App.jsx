import './App.scss'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/Layout.jsx";
import Signin from "./pages/signin/Signin.jsx";
import Signup from "./pages/signup/Signup.jsx";

function App() {

  return (
    <>
<BrowserRouter basename='/vrstory/'>
  <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='Signin' element={<Signin/>}/>
    <Route path='Signup' element={<Signup/>}/>
  </Routes>
</BrowserRouter>
    </>
  )
}

export default App
