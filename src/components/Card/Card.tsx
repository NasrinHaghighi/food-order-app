import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import CardItem from './CardItem'
import {clearCard} from '../../feacutre/orderSlice'
interface Props{
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
function Card({setIsOpen}:Props) {
    const dispatch=useAppDispatch()
    const ordersArray= useAppSelector((state) => state.orders.orders)
   const totalPrice=ordersArray.reduce((acu, cur)=>{
  
     return  acu + cur.amount* cur.price 
   },0)
//console.log(totalPrice)
  return (
   
    <div className='card'>
        {ordersArray.length>0 ? 
        ordersArray.map((item)=>{
            return <CardItem item={item}/>
        }):  <p>No meal in your cart</p>}
        
        <div className='total'>
            <div className='totalprice'><h2>Total Price</h2><span>{totalPrice.toFixed(2)}</span></div>
            <div className='btndiv'>
                <button className='close' onClick={()=>setIsOpen(false)}>CLose</button>
                <button className='empty' onClick={()=>dispatch(clearCard())}>Empty Card</button>
                <button className='pay'>Payment</button>
            </div>
        </div>
      


       </div>
    
   
     


   
  )
}

export default Card