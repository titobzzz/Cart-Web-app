import React from "react"
import { CartItem } from "../components/cartItem"
import {ShorpingCartContext} from '../context/storeContext'
import storageItems from '../data/items.json'
import { CartBarContext } from "../context/storeContext"
import Currency from "../utlities/CurrencyFormat"

export default function Cartpage(){
    const {toggle}= CartBarContext()
    const {cartQuantity,CartItems}= ShorpingCartContext()
    const storage = storageItems
  
    return(
        <div className="fixed rounded-2xl z-[2] w-full h-full flex">
            <div onClick={toggle} className="bg-black opacity-40 w-3/5  ">
                
            </div>
            <div className="bg-white w-2/5 ">
                            {/* /header*/}  
                             <div className=" m-[10px] p-[20px] flex justify-between ">
                                 
                                    <div> 
                                        Cart
                                    </div>
                                    <div onClick={toggle}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                                            </svg>
                                    </div>
                                   

                            </div>     
                            {/* body     */}
                            {
                                CartItems.length === 0   ?
                                    <div className="">
                                            <p>
                                                Cart is empty
                                            </p>
                                </div>: 
                                <div className=" m-[10px] p-[20px]">
                                      <div>
                                      {CartItems.map((item=>{
                                            return <CartItem key={item.id} {...item} />
                                        }))}
                                        
                                      </div>
                                      <div className=" flex mr-auto">
                                        Total{Currency(CartItems.reduce((total,CartItem)=>{
                                            const item = storageItems.find(i => i.id === CartItem.id )
                                            return total + (item?.price||0) * CartItem.quantity
                                        },0)
                                        )}
                                      </div>
                            </div>              
                       }
            </div>
        </div>
    )
}  