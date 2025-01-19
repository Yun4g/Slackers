import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import ProductList from './components/productList'
import ProductDetail from './components/productDetail'
import CartComponent from './components/Cart'
function App() {
 
  return (
      <div className='  h-full'>     
       <Routes>
          <Route path='/' element={ <LandingPage/>}/>
             <Route path='/productsList' element={<ProductList/>}/>
             <Route path='/productsList/:id' element={<ProductDetail/>}/>
             <Route path='/Cart-item' element={<CartComponent/>}/>
        </Routes>
      </div> 
  )
}

export default App
