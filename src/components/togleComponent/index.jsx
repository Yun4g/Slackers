import { useContext } from "react"
import { GlobalContext } from "../useContext"




function ToggleComponent(){
  const {navigatIon}  =  useContext(GlobalContext)

    return(
        <header className="  h-full flex justify-center items-center">
               
                <nav>
                    <ul>
                        <li className=" text-center  mb-5 text-white font-bold text-2xl">
                        Contact
                        </li>
                        <li>
                        <button onClick={navigatIon}  className=' bg-black  h-12 rounded-md w-56 text-white'>
                 Shop Demo Now
             </button> 



                        </li>
                    </ul>
                </nav>

        </header>
    )

}


export default ToggleComponent