import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import CardItem from './CardItem'

interface Props{
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}
function Card({setIsOpen}:Props) {
    const ordersArray= useAppSelector((state) => state.orders.orders)
   

  return (
   
    <div className='card'>
        {ordersArray.map((item)=>{
            return <CardItem item={item}/>
        })}
        
        <div className='total'>
            <div className='totalprice'><h2>Total Price</h2><span>100</span></div>
            <div className='btndiv'>
                <button className='close' onClick={()=>setIsOpen(false)}>CLose</button>
                <button className='empty'>Empty Card</button>
                <button className='pay'>Payment</button>
            </div>
        </div>
      


       </div>
    
   
     


   
  )
}

export default Card