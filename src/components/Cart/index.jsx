import { useContext } from "react"
import { GlobalContext } from "../useContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import Logo  from  '/assets/logo.jpg'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import { Link,  useNavigate,  } from "react-router-dom";





function CartComponent() {
    const { cartItem,  removeFromCart, totalPrice,  increamentQuantity, DecreamentQuantity } = useContext(GlobalContext)
    
       const navigate = useNavigate()

    return(
         <>
        {
            cartItem.length === 0 ? (
                <div className="  bg-slate-800 h-screen overflow-y-scroll overflow-x-hidden pb-5 ">
                    
                    <section>
                          <div className="flex flex-col justify-center items-center h-screen w-full">
                            <FontAwesomeIcon icon={faFaceSadTear} className=" text-9xl text-white" />
                          <h1 className="text-4xl text-white font-bold">Your Cart is Empty</h1>
                          <Link to={'/productsList'}>
                          <button className="mt-5 text-2xl text-white bg-red-500 px-12 py-2 rounded-full">Continue Shopping</button>
                          </Link>
                          </div>
    
                    </section>
                </div>
            ) : (
                <section className=" bg-slate-800 h-screen overflow-y-scroll overflow-x-hidden pb-5 ">
  
                <header className=' flex  justify-between ps-4 pe-4 md:ps-28 md:pe-28 items-center h-20 w-full bg-white shadow-lg shadow-slate-600'>
                    <div className=' h-14 w-28  rounded-lg overflow-hidden'>
                       <Link to={'/productsList'}>
                       <img src={Logo} className=' w-full h-full' alt="" />
                       </Link>
                    
                   </div>
                   <nav className=' flex  gap-9 font-semibold   items-center text-slate-600'>
                 
                    <div onClick={()=> navigate('/Cart-item')} className=' relative  h-[64px]   flex  items-end pb-2'>
                          <FontAwesomeIcon icon={ faCartShopping} className=' cursor-pointer   text-3xl text-red-700' />
                          <p className=' absolute top-0 right-2 text-2xl text-red-700'>{cartItem.length}</p>
                          </div>

                          
                     
                   </nav>
                    </header>
                  
                  
                       <div className="  pt-10 ps-4 pe-4 lg:p-24 flex flex-col gap-9">
                        {
                            cartItem.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row  justify-between   items-center   p-2 ps-10 pe-10 rounded-2xl  bg-gray-700 ">
                                 
                                   <div className=" w-12 h-12 rounded-full overflow-hidden" >
                                       <img src={item.image} className=" w-full h-full" alt="" />
                                   </div>
                                   <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-12">
                                    <h3 className=" font-semibold text-white line-clamp-1  w-28 text-xl">{item.title}</h3>
                                    <p className="font-semibold text-white  text-xl">Price: ${ item.price * item.quantity }</p>
                                  
           
                                    </div>
                               
                                    
                             <div className="flex flex-col md:flex-row justify-center mt-3 md:mt-0  items-center gap-2 md:gap-12">
                                 <button  onClick={()=> increamentQuantity(item)} className=" h-8 w-8 md:h-12 md:w-12  items-center bg-slate-950 text-white  rounded-full flex justify-center">
                               <FontAwesomeIcon icon={faPlus}  />
                                 </button>

                                 <p className="font-semibold text-white ">Quantity: {item.quantity}</p>
                                 <button onClick={()=> DecreamentQuantity(item)}  className="  h-8 w-8 md:h-12 md:w-12  items-center bg-slate-950 text-white rounded-full flex justify-center">
                                 <FontAwesomeIcon icon={faMinus}  />
                                 </button>
                                
                                 </div>
                              
           
                                <div onClick={()=>  removeFromCart(item.id)} className=" mt-5 md:mt-0 cursor-pointer">
                                    <FontAwesomeIcon icon={ faTrash} className=" text-white" />
                                </div>
                                </div>
                                
                            ))
                        }
           
           
                           
                        </div>
                           <div className=" mt-4 lg:mt-0 ms-16 flex flex-col gap-6">
                      
                        
                         
                         <Link to={'/Checkout'} className={"bg-black  flex justify-center items-center h-12 rounded-md  w-56 text-white mt"}>  Amount(${totalPrice.toFixed(4)}) </Link>
                           </div>
                  
                         
                   </section>
            )
        }
      </>
    )
}

export default CartComponent