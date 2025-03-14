
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/nav/Nav'
import Login from './components/auth/login/Login'
import Reducer from './components/reducer/Reducer'
import Redux from './components/redux/Redux'
import Products from './components/products/Products'
import ProductsTool from './reduxtool/products/Products'


function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<h1>home</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path='/reducer' element={<Reducer/>} />
      <Route path='/redux' element={<Redux />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products_tool' element={<ProductsTool />} />
    </Routes>
    </>
  )
}

export default App
