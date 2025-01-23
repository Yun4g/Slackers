import { useNavigate } from "react-router-dom";
import SearchComponent from "../searchComponent";
import useFetch from "../useFetch";
import { useContext } from "react";
import { GlobalContext } from "../useContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

function ProductList() {
  const navigate = useNavigate();
  const { searchTerm } = useContext(GlobalContext);
  const { data, loading } = useFetch("https://fakestoreapi.com/products");



  const filterdData = data.filter((item) =>
       searchTerm
      ? item.title.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  )





  return (
    <section className="bg-gray-100">
      <SearchComponent />
      {loading ? (
        <div className="bg-gray-600 bg-opacity-50 h-screen overflow-hidden pb-5">
          <div className="flex flex-col justify-center items-center h-screen w-full">
            <div className="border-4 border-black animate-spin w-14 h-14 border-dotted rounded-full"></div>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-2 p-4 md:p-24">
            {
               filterdData.length === 0 ? (
                <div className="  absolute  top-[100px]  left-16 md:left-[680px] text-center  ">
                <FontAwesomeIcon icon={faFaceSadTear} className=" text-4xl md:text-9xl   text-gray-700" />
              <h1 className="text-4xl  text-slate-700 font-bold">No  Matches </h1>
              
              </div>
               ) : (
                filterdData.map((product) => (
                    <div
                      key={product.id}
                      className="border shadow-lg rounded-lg shadow-gray-800 bg-slate-50 h-[400px] md:h-[520px] p-4"
                    >
                      <div className="h-1/2">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="h-1/2 flex flex-col justify-center gap-1">
                        <h2 className="font-bold">{product.title}</h2>
                        <button
                          onClick={() => navigate(`/productsList/${product.id}`)}
                          className="line-clamp-4 text-sm underline text-red-900 cursor-pointer transition-transform hover:scale-110"
                        >
                          {product.description}
                        </button>
                        <p className="font-bold text-red-950">
                          Price: ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  )))}
               
            
        </div>
      )}
    </section>
  );
}

export default ProductList;
