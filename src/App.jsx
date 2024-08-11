
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nossoproduto from './pages/Nossoproduto'
import Materiais from './pages/Materiais'
import Bibliografias from './pages/Bibliografias'
import Quemsomos from './pages/Quemsomos'



function  App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produto' element={<Nossoproduto/>}/>
        <Route path='/materiais' element={<Materiais/>}/>
        <Route path='/bibliografias' element={<Bibliografias/>}/>
        <Route path='/quemsomos' element={<Quemsomos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
