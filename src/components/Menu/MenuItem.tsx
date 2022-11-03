import React , {useState}from 'react'
import { food } from '../../types/food'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {addorder} from '../../feacutre/orderSlice'


interface Props{
  item:food
  handleList:(item:food, amount:number)=>void
}






function MenuItem({item , handleList}:Props) {
    const ing=item.ingrdeints
    //const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
   
    const [amount, setAmount] =useState<number>(1)
    const handleAmount=(e:any)=>{
        setAmount(Number(e.target.value))
    }
    //console.log(amount)
  return (
    <div className='menuitem'>
        <div className='info'>
          <h1>{item.name}</h1>

          <div className='ing'>
        {ing.map((item, index)=>{
            return index===ing.length-1 ? <span>{item}</span> :<span>{item} , </span>
        })}
          </div>

            <div className='price'>{item.price}</div>
        </div>
        <div className='action'>
        <label htmlFor='amount'>Amount:
         <input type="number" id="amount" name="amount" onChange={handleAmount} value={amount} min="1" max="10"/></label>
        <button className='addbtn' onClick={()=>handleList(item, amount)}
       >Add to Card</button>
        </div>
    </div>
  )
}

export default MenuItem