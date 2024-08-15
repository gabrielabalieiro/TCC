
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nossoproduto from './pages/Nossoproduto'
import Materiais from './pages/Materiais'
import Bibliografias from './pages/Bibliografias'
import Quemsomos from './pages/Quemsomos'
import Footer from './pages/Footer'
import SingUp from './pages/Singup'
import Login from  './pages/Login'



function  App() {
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/produto' element={<Nossoproduto/>}/>
      <Route path='/materiais' element={<Materiais/>}/>
      <Route path='/bibliografias' element={<Bibliografias/>}/>
      <Route path='/quemsomos' element={<Quemsomos/>}/>
      <Route path='/singup' element={<SingUp/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
