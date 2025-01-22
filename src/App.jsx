import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import ProductList from './components/productList'
import ProductDetail from './components/productDetail'
import CartComponent from './components/Cart'
import Payment from './components/Payment'
import Checkout from './components/Payment/checkout'

function App() {
 
  return (
      <div className='  h-full'>     
       <Routes>
          <Route path='/' element={ <LandingPage/>}/>
             <Route path='/productsList' element={<ProductList/>}/>
             <Route path='/productsList/:id' element={<ProductDetail/>}/>
             <Route path='/Cart-item' element={<CartComponent/>}/>
             <Route path='/Checkout' element={<Checkout/>}/>
              <Route path='/Payment' element={<Payment/>}/>
        </Routes>
      </div> 
  )
}

export default App
