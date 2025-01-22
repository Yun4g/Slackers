import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import '/src/App.css'





function Payment() {
   const [formData, setFormData] = useState({
      cardHolder: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",


   })


   const [focus, setFocus] = useState({
      cardHolder: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
   })


   const handleOnFocus = (field) => {
      setFocus((prev) => ({ ...prev, [field]: true }))
   }


   const handleOnBlur = (field) => {
      setFocus((prev) => ({ ...prev, [field]: false }))
   }

   const handleKeyDown = (event) => {
        // Allow navigation keys like Backspace, Delete, Arrow keys, etc.
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
  ];

  if (allowedKeys.includes(event.key)) return
      const isDigit = /^[0-9]+$/.test(event.key)

      if (!isDigit) {
         event.preventDefault()
      }
   }


   const handleChange = (event) => {
      const { name, value } = event.target;

      let isValid = true

      if (name === 'cardNumber' && validateCardNumber(value)) {    
      let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ').slice(0, 19);         
         setFormData((prev) => ({ ...prev, cardNumber: formattedValue }))
         return;
      } 
      
      if (name === 'expiryDate' ) {
         
         // Format the expiryDate to MM/YY
         let cleanValue = value.replace(/\D/g, '').slice(0, 4); // Limit to 4 characters

         let   formattedValue = cleanValue.slice(0, 2) + (cleanValue.length > 2  ? '/' + cleanValue.slice(2,4) : '');                
        
            setFormData((prev) => ({ ...prev, expiryDate: formattedValue }));              
        return;

      }

      if (isValid) {
         setFormData((prev) => ({ ...prev, [name]: value}));
         return;
      }
       

      if (name === 'cvv') {
          const cleanValue = value.replace(/\D/g, '');
          if (cleanValue.length <= 3) {
             setFormData((prev) => ({...prev, cvv: cleanValue  }));
             return;
          }
      }
      }

     

  

   const maskCardNumber = (cardNumber) => {
      const cleanNumber = cardNumber.replace(/\D/g, ""); // Remove non-digit characters
      return cleanNumber.slice(0, -4).replace(/./g, "X") + cleanNumber.slice(-4);
   };

   const handlsubmit = (event) => {
      event.preventDefault();
      localStorage.setItem('submit', formData);
      alert('Form submitted successfully')

      if (validateExpiryDate(formData.expiryDate)) {    
           alert('Payment successful')
           return; 
     }
   }


   const validateCardNumber = (cardNumber) => {
      const cleanNumber = cardNumber.replace(/\D/g, "")
      let sum = 0;
      let alternate = false
      for (let i = cleanNumber.length - 1; i >= 0; i--) {
         let digit = parseInt(cleanNumber[i]);
         if (alternate) {
            digit *= 2;
            if (digit > 9) digit -= 9;
         }
         sum += digit;
         alternate = !alternate;
      }
        return sum % 10 === 0

   }


   const validateExpiryDate = (expiryDate) => {

      const expiryFormat = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expiryFormat.test(expiryDate)) {
         return false;
      }
      const [month, year] = expiryDate.split('/')

      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;
      const currentYear = currentDate.getFullYear() % 100;

      return year > currentYear || (year === currentYear && month >= currentMonth);
   

   }

   return (
      <section className=" h-screen  ">

         <header className=" flex justify-center items-center gap-9 bg-blue-950 px-6 py-4">
            <h1 className=" text-2xl md:text-6xl text-center text-white font-mono ">Slackers</h1>
            <FontAwesomeIcon icon={faCartShopping} className='   cursor-pointer  text-slate-50 text-lg  md:text-4xl ' />

         </header>

         <section className="flex  justify-center bg-slate-400 items-center w-full  py-5 md:h-full">

            <form onSubmit={handlsubmit} className=" w-[92%]  md:w-[70%] lg:w-[30%]  border px-2 md:px-5 py-8   gap-2   bg-white rounded-lg shadow-lg  shadow-slate-700">
               <h1 className=" md:text-3xl uppercase mb-7 font-bold">Payment Details</h1>
               <p className=" font-semibold mb-4">Complete Your purchase securly</p>


               <div className=" bouncing-div relative h-72 md:h-48 bg-gradient-to-r overflow-hidden from-indigo-500 to-purple-600 rounded-xl p-6 text-white float-animation">
                  <div className="absolute top-4 right-4">
                     <svg className="h-8" viewBox="0 0 48 48" fill="none">
                        <path d="M45 35c0 2.209-1.791 4-4 4H7c-2.209 0-4-1.791-4-4V13c0-2.209 1.791-4 4-4h34c2.209 0 4 1.791 4 4v22z" fill="#ffffff" />
                     </svg>
                  </div>

                  <div className="flex flex-col  w-full mt-7 gap-10">
                     <div className="flex flex-col md:flex-row  gap-3 md:gap-40">
                        <p className=" text-sm  ">card holder <br /> {formData.cardHolder}</p>


                        <p className="text-sm ">card number <br /> {maskCardNumber(formData.cardNumber)}</p>

                     </div>

                     <div className="flex flex-col md:flex-row  gap-3 md:gap-56">
                        <p className="text-sm ">CVV <br /> {formData.cvv}</p>

                        <p className=" text-sm ">expiry date <br />  {formData.expiryDate}</p>

                     </div>


                  </div>
               </div>
               <div className=" relative w-full flex flex-col md:flex-row gap-3 ">
                  <label className={`absolute top-[2.1rem] md:top-7 left-3 text-slate-500 transition-transform duration-300 ${focus.cardHolder || formData.cardHolder ? '-translate-y-3 bg-white scale-75' : 'translate-y-2'}`} htmlFor="cardHolder">card Holder Name</label>
                  <input
                     onFocus={() => handleOnFocus('cardHolder')}
                     onBlur={() => handleOnBlur('cardHolder')}
                     type="text"
                     name="cardHolder"
                     id="cardHolder"
                     onChange={handleChange}

                     value={formData.cardHolder}
                     className="border-0 outline-none ps-3 border-slate-400 border-b-2 mt-9 bg-transparent z-10  h-10 md:w-1/2 "

                     required
                  />


                  <label className={` absolute top-[7.6rem] md:top-7  left-3 md:left-[260px] lg:left-[220px]  text-slate-500  transition-transform duration-300 ${focus.cardNumber || formData.cardNumber ? '-translate-y-3  bg-white scale-75' : 'translate-y-2'}`} htmlFor="CompanyName ">Card Number</label>
                  <input
                     onFocus={() => handleOnFocus('cardNumber')}
                     onBlur={() => handleOnBlur('cardNumber')}
                     type="text"
                     name="cardNumber"
                     id="cardNumber"
                     onChange={handleChange}
                     onKeyDown={handleKeyDown}
                     value={formData.cardNumber}
                     className="  outline-none  ps-3 mt-5 border-slate-400 border-b-2 h-14 bg-transparent z-[999]  md:w-1/2 "
                     required
                  />
               </div>



               <div className=" flex flex-col md:flex-row gap-3 relative w-full mt-10 md:mt-6">
                  <label className={` absolute  left-2  text-slate-500 transition-transform duration-300 ${focus.expiryDate || formData.expiryDate ? '-translate-y-3 scale-75' : 'translate-y-2'}`} htmlFor="expiryDate"> expiry Date </label>

                  <input
                     onFocus={() => handleOnFocus('expiryDate')}
                     onBlur={() => handleOnBlur('expiryDate')}
                     type="text"
                     id="expiryDate"
                     onChange={handleChange}
                     value={formData.expiryDate}
                     onKeyDown={handleKeyDown}
                     name="expiryDate"
                     maxLength={5}
                     className="border-0 outline-none ps-3 border-slate-400 bg-transparent border-b-2 z-10 h-10 md:w-1/2 "
                     required
                  />







                  <label className={` absolute  top-20 md:top-0  left-3 md:left-[260px] lg:left-[220px]  text-slate-500 transition-transform duration-300 ${focus.cvv || formData.cvv ? '-translate-y-4 scale-75' : 'translate-y-2'}`} htmlFor="cvv">CVV</label>

                  <input
                     type="text"
                     name="cvv"
                     id="cvv"
                     onFocus={() => handleOnFocus('cvv')}
                     onBlur={() => handleOnBlur('cvv')}
                     onChange={handleChange}
                     onKeyDown={handleKeyDown}
                     value={formData.cvv}
                     required
                     maxLength={3}
                     className="border-0 outline-none ps-3 bg-transparent border-slate-400 border-b-2 h-10 mt-7 md:mt-0 md:w-1/2 " />


               </div>

               <button type="submit" className=" px-6 py-3 rounded-lg text-slate-50 cursor-pointer bg-red-700 mt-3">Pay Now</button>


               <footer className=" mt-4">
                  <p className=" text-xl font-semibold text-slate-600">powered by :</p>

               </footer>
            </form>



         </section>
      </section>


   );



}


export default Payment;


