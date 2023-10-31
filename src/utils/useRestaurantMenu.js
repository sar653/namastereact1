import { useEffect,useState } from "react"
import { MENU_api } from "./contants"

const useRestaurantMenu=(resd)=>{
[resInfo, setResInfo]=useState(null)

useEffect(()=>{
    fetchMenu()
},[])
const fetchMenu=async()=>{
    const data= await fetch(MENU_api+resd)

    const json= await data.json();

    console.log(json)
    setResInfo(json.data)

}
    return resInfo

}
export default useRestaurantMenu