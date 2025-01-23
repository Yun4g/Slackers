import { useContext } from "react"
import { GlobalContext } from "../useContext"
import { PaystackButton } from "react-paystack"

import Header from "../header"
import ToggleComponent from "../togleComponent"




function Checkout() {
   
    const { totalPrice,  handleOnchange,  ComponentProps, toggleState  } = useContext(GlobalContext)

  
    return (
        <>
       <Header/>

       <div className={` absolute top-22 w-full  bg-slate-900 transition-all duration-300   ${ toggleState ? 'h-[170px] block  ': 'h-0 hidden'} `}>
           <ToggleComponent/>
            </div>
        <section className=" bg-slate-300 flex justify-center p-3 items-center h-screen w-full">
            
            <form  onSubmit={(e) => e.preventDefault()} action="" className=" flex flex-wrap gap-4  shadow-lg  shadow-slate-800  bg-gray-900   md:w-[600px]  rounded-2xl p-5">
                <h1 className=" text-3xl font-bold text-center mb-5 w-full text-white">Payment Details</h1>

                <div className=" w-full  md:w-fit  ">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="FirstName"
                        onChange={handleOnchange}
                        required
                        
                        className=" h-10 md:h-16 bg-transparent  border-b-2 outline-none focus:border-b-red-600  w-full ps-4 text-lg "
                    />
                </div>
                <div className="w-full relative  md:w-fit">
                    
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="lastName"
                        onChange={handleOnchange}
                        required
                        className=" h-10 md:h-16 bg-transparent  border-b-2 outline-none focus:border-b-red-600  w-full ps-4 text-lg "
                    />
                </div>
                <div className="w-full">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 bg-transparent  border-b-2 outline-none focus:border-b-red-600  w-full ps-4 text-lg "
                    />
                </div>
                <div className="w-full">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="PhoneNumber"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 bg-transparent  border-b-2 outline-none focus:border-b-red-600  w-full ps-4 text-lg "
                        required />
                </div>
                <div className="w-full">
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Full Address"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 bg-transparent  border-b-2 outline-none focus:border-b-red-600  w-full ps-4 text-lg "
                        required />
                </div>
                <div className="w-full  md:w-fit">
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 bg-transparent  border-b-2 outline-none focus:border-b-red-600  w-full ps-4 text-lg "
                        required />
                </div>
                <div className="w-full  md:w-fit">
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 bg-transparent  border-b-2 outline-none focus:border-b-red-600  w-full ps-4 text-lg "
                        required />
                </div>
                <div>
                  <p  className=" h-10 md:h-16 border-2 outline-none bg-white flex items-center justify-center w-full p-4 text-slate-800 font-bold text-lg rounded-md">
                       Total($<span>{totalPrice.toFixed(2)}</span>)
                  </p>
                </div>

                <PaystackButton onclick={console.log(ComponentProps)} className="h-10 md:h-16 w-full md:w-fit  cursor-pointer  bg-red-800 text-white md:p-4 text-lg rounded-md" value="Continue To Pay"  {...ComponentProps}/>

            </form>
        </section>
        </>
    )
}


export default Checkout