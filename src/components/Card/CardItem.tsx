import React from 'react'
import { food } from '../../types/food'
import {decrement} from '../../feacutre/orderSlice'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'


interface Props{
    item:food
}
function CardItem({item}:Props) {

    const dispatch=useAppDispatch()

    const handleAmount=(id:number)=>{
         dispatch(decrement(id))
    }

  return (
    <div className='carditem'>
        <div className='cardinfo'>
            <p>{item.name}</p>
            <div className='cardprice'>{item.price} <span>*{item.amount}</span></div>
        </div>
        <div className='cardaction'>
            <span onClick={()=>handleAmount(item.id)}>-</span><span >+</span>
        </div>
    </div>
  )
}

export default CardItem