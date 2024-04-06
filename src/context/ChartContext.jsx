import { createContext, useContext,useState } from "react";



const ChartContext = createContext(null);
const getChart = () =>{
   const resp = localStorage.getItem("charts")
if (resp) {
   return JSON.parse(resp)
}
else return []
}
const ChartContextProvider =({children})=>
{
   const[charts,setCharts]=useState(getChart()); 
   
return< ChartContext.Provider value={{charts,setCharts}}>
{children}
</ChartContext.Provider>
}
export default ChartContextProvider

export const useCharContext=()=>useContext(ChartContext);
