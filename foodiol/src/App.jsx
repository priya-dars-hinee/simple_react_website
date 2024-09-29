import React from 'react'
import img from '../src/image/Logo2.png'
import Layout from './components/Layout/Layout'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/Pages/Home'
import About from '../src/Pages/About'
import Contact from '../src/Pages/Contact'
import Menu from '../src/Pages/Menu'
import PagenotFound  from './Pages/PagenotFound'
// import './App.css'
const App = () => {
  return (
    <div>
    
      
      <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/menu' element={<Menu/>} />
  <Route path='*' element={<PagenotFound/>} />
</Routes>



      </BrowserRouter>
    </div>
  )
}

export default App