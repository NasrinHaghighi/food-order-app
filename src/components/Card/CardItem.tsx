import React from 'react'
import { food } from '../../types/food'
import {decrement, increment} from '../../feacutre/orderSlice'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'


interface Props{
    item:food
}
function CardItem({item}:Props) {

    const dispatch=useAppDispatch()

    const handleDecriment=(id:number)=>{
         dispatch(decrement(id))
    }
   
    const handleincriment=(id:number)=>{
        dispatch(increment(id))
   }
  return (
    <div className='carditem'>
        <div className='cardinfo'>
            <p>{item.name}</p>
            <div className='cardprice'>{item.price} <span>*{item.amount}</span></div>
        </div>
        <div className='cardaction'>
            <span onClick={()=>handleDecriment(item.id)}>-</span>
            <span onClick={()=>handleincriment(item.id)}>+</span>
        </div>
    </div>
  )
}

export default CardItem