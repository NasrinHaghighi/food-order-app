import React, {useState,useEffect} from 'react'
import MenuItem from './MenuItem'
import { food } from '../../types/food'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {addorder} from '../../feacutre/orderSlice'

const menuList=[
    {id:1, amount:1,name:'pizza', ingrdeints:['mashroom', 'green pepper', 'egg', 'ham'], price:22.99},
    {id:2, amount:1, name:'pasta', ingrdeints:['cream', 'shrimp', 'parmizan', 'parsley'], price:16.50},
    {id:3, amount:1, name:'kabab', ingrdeints:['onion', 'meat', 'chicken', 'garlic'], price:18.99},
    {id:4, amount:1, name:'ashe', ingrdeints:['onion', 'salsa', 'reshte', 'spinaj'], price:12.99},
]

function Menu() {
    const dispatch=useAppDispatch()
    const [orderList, setOrderList] =useState<food[]>([])

    const handleList=(item:food ,amount:number)=>{
     const {id} =item


   const newArray= orderList.filter((foo)=>{
    return foo.id !== id
   })

   setOrderList([...newArray, {...item, amount:amount}])


 
    }
//console.log(orderList)
    useEffect(() => {
    dispatch(addorder(orderList))
    }, [orderList])


    //console.log(orderList)
  return (
    <div className='menu'>
        {menuList.map((item)=>{
            return <MenuItem key={item.id} item={item} handleList={handleList}/>
        })}
    </div>
  )
}

export default Menu


    //     setOrderList([...orderList , {id:item.id , amount:amount, price:item.price, name:item.name, ingrdeints:item.ingrdeints }])
    //    dispatch(addorder(orderList))