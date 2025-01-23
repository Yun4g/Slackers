import { useContext } from "react"
import { GlobalContext } from "../useContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import Logo  from  '/assets/logo.jpg'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import { Link,  } from "react-router-dom";





function CartComponent() {
    const { cartItem,  removeFromCart, totalPrice,  increamentQuantity, DecreamentQuantity } = useContext(GlobalContext)
    

    return(
         <>
        {
            cartItem.length === 0 ? (
                <div className="  bg-slate-50  h-screen overflow-y-scroll overflow-x-hidden pb-5 ">
                    
                    <section className="  w-full">
                          <div className="flex flex-col justify-center items-center h-screen w-full">
                            <FontAwesomeIcon icon={faFaceSadTear} className=" text-9xl   text-gray-700" />
                          <h1 className="text-4xl  text-slate-700 font-bold">Your Cart is Empty</h1>
                          <Link to={'/productsList'}>
                          <button className="mt-5 text-2xl text-white bg-red-500 px-12 py-2 rounded-full">Continue Shopping</button>
                          </Link>
                          </div>
    
                    </section>
                </div>
            ) : (
                <section className=" bg-slate-50 h-screen overflow-y-scroll overflow-x-hidden pb-5 ">
  
                <header className=' flex  justify-between ps-4 pe-4 md:ps-28 md:pe-28 items-center h-20 w-full bg-white shadow-lg shadow-slate-600'>
                    <div className=' h-14 w-28  rounded-lg overflow-hidden'>
                       <Link to={'/productsList'}>
                       <img src={Logo} className=' w-full h-full' alt="" />
                       </Link>
                    
                   </div>
                   <nav className=' flex  gap-9 font-semibold   items-center text-slate-600'>
                 
                    <Link to={'/productsList'} className=' relative  h-[64px]   flex  items-end pb-2'>
                    <FontAwesomeIcon icon={ faCartShopping} className='   cursor-pointer   text-2xl text-slate-950 ' />      
                   <p className=' absolute top-2  right-1 bottom-5  text-lg font-bold text-red-700 '>{cartItem.length}</p>
       
                          </Link>

                          
                     
                   </nav>
                    </header>
                  
                  <section className="flex flex-col  justify-center items-center h-full">
                   
                       <div className="  bg-slate-600 shadow-lg shadow-gray-500   p-2 md:p-3 rounded-2xl w-[300px] md:w-[500px] flex flex-col gap-3">
                        {
                            cartItem.map((item, index) => (
                                <div key={item.id} className={`flex flex-col md:flex-row gap-3 md:gap-0 justify-between  items-center  rounded-md md:rounded-2xl p-1 md:p-3 ${index % 2 === 1 ? ' bg-gray-200 text-slate-900' : ' text-white'}`}>
                                 
                                 <div className="flex justify-center gap-9">
                                
                                   <div className="flex   justify-center items-center ">
                                    <h3 className=" font-semibold  line-clamp-1   w-28 text-sm">{item.title}</h3>
                                    <p className="font-semibold  text-xs  md:text-lg">Price: ${ item.price.toFixed() * item.quantity }</p>
                                  
           
                                    </div>
                                 </div>
                           
                               
                                    
                             <div className="flex  gap-3 justify-center  items-center">
                                 <button  onClick={()=> increamentQuantity(item)} className=" text-xs  cursor-pointer   rounded-full flex justify-center">
                               <FontAwesomeIcon icon={faPlus}  />
                                 </button>

                                 <p className="font-semibold  text-xs  ">Quantity: {item.quantity}</p>
                                 <button onClick={()=> DecreamentQuantity(item)}  className="  text-xs  cursor-pointer  rounded-full flex justify-center">
                                 <FontAwesomeIcon icon={faMinus}  />
                                 </button>
                                

                                
                                 <div onClick={()=>  removeFromCart(item.id)} className="text-sm  mt-0  cursor-pointer">
                                    <FontAwesomeIcon icon={ faTrash}  />
                                </div>
                                 </div>
                              
           
                                
                                </div>


                                
                            ))
                        }    

                         <div className="flex  justify-center mt-7 gap-6">                             
                         <Link to={'/Checkout'} className={"bg-black  flex justify-center items-center h-12 rounded-md  z-[999] w-56 text-white mt"}>  Total(${totalPrice.toFixed(2)}) </Link>                 
                           </div>     
                        </div>
                        </section>
                          
                  
                         
                   </section>
            )
        }
      </>
    )
}

export default CartComponent