import { useNavigate } from "react-router-dom";
import SearchComponent from "../searchComponent"
import useFetch from "../useFetch"




function ProductList() {

    const navigate = useNavigate()
    

     const {data, loading} =  useFetch('https://fakestoreapi.com/products');
     console.log(data)
   
    return(
        <section className=" bg-gray-100 ">
            <SearchComponent/>
             {
                loading ? (
                    <div className=" bg-gray-600 bg-opacity-50  h-screen  overflow-hidden pb-5 ">
                    
                    <section>
                          <div className="flex flex-col justify-center items-center  h-screen w-full">
                             <div className="border-4 border-black  animate-spin   w-14 h-14  border-dotted rounded-full  "></div>
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
                                       <p  onClick={() => navigate(`/productsList/${product.id}`)} className=" line-clamp-4 text-sm underline text-red-900 cursor-pointer transition-transform hover:scale-110">{product.description}</p>                                  
                                      <p className=" font-bold text-red-950"> Price: ${product.price}</p>
                                    
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