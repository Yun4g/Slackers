import { useNavigate } from "react-router-dom";
import SearchComponent from "../searchComponent"
import useFetch from "../useFetch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinHearts } from "@fortawesome/free-solid-svg-icons";





function ProductList() {

    const navigate = useNavigate()
    

     const {data, loading} =  useFetch('https://fakestoreapi.com/products');
     console.log(data)
   
    return(
        <section className=" bg-slate-800">
            <SearchComponent/>
             {
                loading ? (
                    <div className="  bg-slate-800 h-screen overflow-y-scroll overflow-x-hidden pb-5 ">
                    
                    <section>
                          <div className="flex flex-col justify-center items-center h-screen w-full">
                            <FontAwesomeIcon icon={faFaceGrinHearts } className=" text-9xl text-white" />
                          <h1 className="text-4xl text-white font-bold">loading...</h1>
                        
                          </div>
    
                    </section>
                </div>
                ) :(

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2 p-4  md:p-24  " >
                         {
                               data.map(product => (
                                <div key={product.id} className="border shadow-lg rounded-lg shadow-gray-800 bg-slate-50 h-[520px] p-4">
                                    <div className=" h-1/2 ">
                                    <img src={product.image} alt={product.title} className= " w-full h-full  object-contain"  />
                                    </div>
                                      <div className=" h-1/2 flex flex-col justify-center  gap-1 ">
                                     
                                      <h2 className="font-bold">{product.title}</h2>
                                       <p className=" line-clamp-4 text-sm ">{product.description}</p>                                  
                                      <p className=" font-bold text-red-950"> Price: ${product.price}</p>
                                      <button    onClick={() => navigate(`/productsList/${product.id}`)}  className=" w-32 rounded-md text-slate-50  h-10 bg-slate-950"> Select Item </button>                               
                                      </div>
                                  
                                </div>
                            ))
                         }
                    </div>
                )
             } 
        </section>
    )
}


export default ProductList