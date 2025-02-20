import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Logo  from  '/assets/logo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import { useContext } from "react";
import { GlobalContext } from "../useContext";






function ProductDetail() {
 
    const { id } = useParams(); // Call useParams() as a function
    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
    const {addToCart, cartItem} = useContext(GlobalContext)
    const navigate = useNavigate()
    
  
    if (error) return <p>Error: {error}</p>;

    return(
        <>
        {
            loading ? (
                <div className=" bg-gray-600 bg-opacity-50  h-screen  overflow-hidden pb-5 ">
                    
                <section>
                      <div className="flex flex-col justify-center items-center  h-screen w-full">
                         <div className="border-4 border-black  animate-spin   w-14 h-14  border-dotted rounded-full  "></div>
                      </div>

                </section>
            </div>
            ) : (
                <div>
                <header className=' flex  justify-between ps-2 pe-2 md:ps-28 md:pe-28 items-center h-20 w-full bg-white shadow-lg shadow-slate-600'>
                <div className=' h-14 w-28  rounded-lg overflow-hidden'>
                   <Link to={'/productsList'}>
                   <img src={Logo} className=' w-full h-full' alt="" />
                   </Link>
                
               </div>
               <nav className=' flex  gap-9 font-semibold   items-center text-slate-600'>
             
                <div onClick={()=> navigate('/Cart-item')} className=' relative  h-[64px]   flex  items-end pb-2'>
                <FontAwesomeIcon icon={ faCartShopping} className='   cursor-pointer   text-2xl text-slate-950 ' />  
       <p className=' absolute top-2  right-1 bottom-5  text-lg font-bold text-red-700 '>{cartItem.length}</p>
       
                      </div>
                 
               </nav>
                </header>
                <section className=" bg-slate-300  ps-5 pe-5 md:h-screen  w-full flex flex-col md:flex-row gap-6 justify-centern items-center">
                   
               
               {data && (
                   <>
                   <div className="h-[450px] md:w-1/2 rounded-3xl bg-white mt-4 flex flex-col gap-3  p-4 items-center justify-center">
                   <h2 className=" font-bold">{data.title}</h2>
                    <img src={data.image} className=" h-[350px]    w-full object-contain" alt={data.title} />
                    </div>
                    <div className="  flex  flex-col items-center text-center justify-center p-4 md:p-0  w-1/2">
                    
                       <p className=" font-semibold w-64 md:w-96">{data.description}</p>
                       <p className=" font-bold text-red-950 mt-5 mb-5 ">Price: ${data.price}</p>
       
                       <button onClick={() => addToCart(data) }   onTouchStart={() => addToCart(data)}  className="   w-72 z-[999;] rounded-md text-slate-50  h-10 bg-slate-950"> 
                       <FontAwesomeIcon icon={ faCartShopping} className=' cursor-pointer   text-sm me-2' />
                           Add To Cart</button>

                       
                    
                       </div>
                   
                      
                   </>
               )}
                </section>
           </div>
            )
        }
        </>
    
    )
}


export default ProductDetail;