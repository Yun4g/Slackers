import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../useContext"




function Checkout() {
    const  navigate  = useNavigate()

    const { totalPrice,  handleOnchange,  } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/Payment')
    }
    return (
        <section className=" bg-slate-800 flex justify-center items-center h-screen w-full">

            <form onSubmit={handleSubmit} action="" className=" flex flex-wrap gap-4  shadow-lg shadow-sky-700  md:w-[600px]  rounded-2xl p-5">
                <h1 className=" text-3xl font-bold text-center mb-5 w-full text-white">Payment Details</h1>

                <div className=" w-full  md:w-fit  ">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="FirstName"
                        onChange={handleOnchange}
                        required
                        
                        className=" h-10 md:h-16 border-2 outline-none focus:border-red-600 w-full ps-4 text-lg rounded-md"
                    />
                </div>
                <div className="w-full  md:w-fit">
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="lastName"
                        onChange={handleOnchange}
                        required
                        className=" h-10 md:h-16 border-2 outline-none focus:border-red-600 w-full ps-4 text-lg rounded-md"
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
                        className=" h-10 md:h-16 border-2 outline-none focus:border-red-600 w-full ps-4 text-lg rounded-md"
                    />
                </div>
                <div className="w-full">
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="PhoneNumber"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 border-2 outline-none focus:border-red-600 w-full ps-4 text-lg rounded-md"
                        required />
                </div>
                <div className="w-full">
                    <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Full Address"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 border-2 outline-none focus:border-red-600 w-full ps-4 text-lg rounded-md"
                        required />
                </div>
                <div className="w-full  md:w-fit">
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 border-2 outline-none focus:border-red-600 w-full ps-4 text-lg rounded-md"
                        required />
                </div>
                <div className="w-full  md:w-fit">
                    <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        onChange={handleOnchange}
                        className=" h-10 md:h-16 border-2 outline-none focus:border-red-600 w-full ps-4 text-lg rounded-md"
                        required />
                </div>
                <div>
                  <p  className=" h-10 md:h-16 border-2 outline-none bg-white flex items-center justify-center w-full p-4 text-slate-800 font-bold text-lg rounded-md">
                      Amount($<span>{totalPrice}</span>)
                  </p>
                </div>

                <input type="submit" className="h-10 md:h-16 w-full md:w-fit  cursor-pointer  bg-red-800 text-white md:p-4 text-lg rounded-md" value="Continue To Pay" />

            </form>
        </section>
    )
}


export default Checkout