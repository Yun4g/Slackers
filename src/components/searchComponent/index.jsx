import Logo  from  '/assets/logo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import {faSearch} from  "@fortawesome/free-solid-svg-icons";
import { Link,  } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../useContext';




function SearchComponent() {
    const {cartItem, setSearchTerm,   searchTerm} = useContext(GlobalContext)

    return(
        <header className=' flex  gap-1 md:gap-3 lg:gap-0 justify-between p-2 md:p-4 h-fit md:ps-7 md:pe-7 lg:ps-27  lg:pe-27 items-center md:h-20 w-full   shadow-lg shadow-slate-600'>
            <Link to={'/'} className=' h-9 md:h-14 md:w-28  rounded-lg overflow-hidden'>
            <img src={Logo} className=' w-full h-full' alt="" />
            </Link> 
            
      
       
       <form action="" className=' bg-white lg:w-[900px] flex justify-center items-center ps-1 rounded-lg overflow-hidden h-[47px]'>
       <FontAwesomeIcon icon={ faSearch} className=' cursor-pointer   text-2xl text-gray-400 p-2  border-e-2' />
           <input type="text" className=' w-full h-full outline-none ps-7 ' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value) } name='Search' placeholder=' Search Slack' />
           
       </form>

       <div className=' relative  h-full flex  md:mt-0 items-end  pt-4'>          
       <Link to={'/Cart-item'}>
        <FontAwesomeIcon icon={ faCartShopping} className='   cursor-pointer   text-2xl ' />
       
       
        <p className=' absolute  right-1 bottom-5  text-lg font-bold text-red-700 '>{cartItem.length}</p>
        
        </Link>
       </div>
  
   </header>
    )
}

export default SearchComponent