import { useContext } from "react"
import Header from "../header"
import { GlobalContext } from "../useContext"
import ToggleComponent from "../togleComponent"





function LandingPage() {



    const {navigatIon, toggleState}  =  useContext(GlobalContext)
    return (
        <section className="bg-hero-background relative   bg-cover    bg-center h-screen     ">
            <Header />
            <div className={` absolute top-22 w-full  bg-slate-900 transition-all duration-300   ${ toggleState ? 'h-[170px] block  ': 'h-0 hidden'} `}>
            <ToggleComponent/>
            </div>
            
            <main className=" h-[70%] p-4 md:h-[75%] lg:h-[88%]   w-full flex flex-col   justify-center md:ps-6 lg:ps-60">
                <h1 className=" text-3xl  md:text-6xl text-slate-800 lg:text-slate-900 lg:w-72  leading-tight font-bold md:font-semibold font-serif mb-9"> SLACK COLLECTION</h1>
                <h1 className=" text-2xl text-red-600 font-bold ">FALL - WINTER</h1>
                <p className=" text-lg text-slate-900 font-semibold mt-6 mb-6">Collection 2025</p>
                <p className="text-slate-900 md:w-[480px] mb-7 text-lg md:text-xl  font-medium">A specialist label creating luxury essentials. Ethically crafted
                    with an unwavering commitment to exceptional quality.</p>
                <button onClick={navigatIon} className=' bg-black  rounded-2xl h-12 md:rounded-md w-56 text-white'>
                    Shop Demo Now
                </button>
            </main>
        </section>
    )
}

export default LandingPage;