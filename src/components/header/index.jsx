import { useContext } from 'react'
import Logo from '/assets/logo.jpg'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../useContext'




function Header() {

     const { navigatIon, toggleState, ToggleMenu } = useContext(GlobalContext)

     return (

          <header className=' flex  justify-between  p-4 md:ps-4 md:pe-4 lg:ps-28 lg:pe-28 items-center h-20 w-full bg-white shadow-lg shadow-slate-600'>
               <div className=' h-14 w-28  rounded-lg overflow-hidden'>
                    <img src={Logo} className=' w-full h-full' alt="" />
               </div>
               <nav className=' hidden md:flex  gap-9 font-semibold   items-center text-slate-600'>
                    <div className='flex flex-col relative group'>
                         <Link className='hover:text-black transition-colors duration-300'>CONTACT US</Link>
                         <div className=' border border-slate-900  w-0 group-hover:w-full  rounded transition-all duration-300'></div>
                    </div>

                    <button onClick={navigatIon} className=' bg-black  h-12 rounded-md w-56 text-white'>
                         Shop Demo Now
                    </button>

               </nav>
               <div onClick={ToggleMenu} className='flex flex-col gap-1 md:hidden'>
                    <div className={`w-5 bg-black border-2 border-slate-950 transition-transform duration-300 ${toggleState ? 'rotate-[60deg] translate-y-1' : 'rotate-0'}`}></div>
                    <div className={`w-5 bg-black border-2 border-slate-950 transition-opacity duration-300 ${toggleState ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`w-5 bg-black border-2 border-slate-950 transition-transform duration-300 ${toggleState ? ' -rotate-[45deg] -translate-y-3' : 'rotate-0'}`}></div>
               </div>
          </header>

     )
}

export default Header