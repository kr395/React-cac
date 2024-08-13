import {useState,useEffect} from "react" 
function useCurrencyInfo(currency){
    const [data,setData] = useState({})


   useEffect(()=>{
    //  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{curency}.min.json`

      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.min.json`)
      .then((res)=> res.json())
      .then((res)=> setData(res[currency]));
       console.log(data);
   },[currency])

   return data;
 
}

export default useCurrencyInfo;