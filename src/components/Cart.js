import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import ItemList from './ItemList'
import { clearItem } from '../utils/cartSlice'

const Cart=()=> {

    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()

    const deleteHandler=()=>{
  dispatch(clearItem())
    }
  return(<div>
    <button onClick={deleteHandler}>click</button>
    <ItemList items={cartItems}></ItemList>
  </div>
  )
}

export default  Cart