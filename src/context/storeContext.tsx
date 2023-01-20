
import { createContext, ReactNode, useContext, useState } from "react"
import {useLocalStorage} from '../hooks/useLocalStorage'



type shopingcartProps = {
    children:ReactNode
} 
type shoppingCartMethods ={
   
    getItemQuantity:(id:number)=>number,
    increaseQuantityOfItems:(id:number)=>void,
    decreaseQuantityOfItems:(id:number)=>void,
    removeItems:(id:number)=>void, 
    cartQuantity:number,
    CartItems:cartItemType[]
}
type cartItemType={
    id:number,
    quantity:number,
}
type cartBartype={
    toggle:()=>any,
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const Shopingcart = createContext({} as shoppingCartMethods);
const cartBar = createContext({} as cartBartype)
export function CartBarContext(){
    return useContext(cartBar)
}  

export function ShorpingCartContext(){
    return useContext(Shopingcart)
}
 export function CartBarProvider({children}:shopingcartProps){
    const [open,setOpen]= useState(false)
  
    function toggle(){
        setOpen(prevOpen=>!prevOpen)
      
    }
    
return(
    <cartBar.Provider value={{open,setOpen,toggle}}>
            {children}
    </cartBar.Provider>
)

 }
export const StoreContextProvider =({children}:shopingcartProps)=>{
        const [CartItems,setCart] = useLocalStorage<cartItemType[]>(
            "shoppingCart",
            [])

 const cartQuantity = CartItems.reduce((quantity,item)=> item.quantity + quantity,0)                   
    function getItemQuantity( id:number){
        return CartItems.find(item =>item.id === id)?.quantity || 0
    }
    
    const newFunc=(prevCart:cartItemType[],id:number)=>{
        console.log("prev",prevCart)
        console.log('sample',prevCart.find(items=>items.id === id ))
        if(prevCart.find(items=>items.id === id ) == null){
            console.log('success')
            return[...prevCart,{id,quantity:1}]
        }else{
            console.log('failure')
            return prevCart.map(items=>{
                if(items.id === id){
                    return {...items, quantity: items.quantity + 1}
                }
                else{
                    return items
                }
            })
        }
    }

    function increaseQuantityOfItems(id:number){
        console.log('id', id)
        
        const newCart = newFunc(CartItems,id)
        console.log('newCart',newCart)
        setCart(newCart)  
    console.log('adding') }
    // console.log(CartItems)


    function decreaseQuantityOfItems(id:number){
        setCart(prevCart =>{
            if(prevCart.find(items=>items.id === id )?.quantity === 1  ){
                return prevCart.filter(items=>items.id !== id)
            }else{
               return prevCart.map(items=>{
                    if(items.id === id){
                        return {...items, quantity: items.quantity-1}
                    }
                    else{
                        return items
                    }
                })
            }
        })
    }
 function removeItems(id:number){
    setCart(prevCart=>{
        return prevCart.filter(items=>items.id !== id)
    }

    )
 }

    return( 
        <Shopingcart.Provider value= {{getItemQuantity,increaseQuantityOfItems,decreaseQuantityOfItems,removeItems,cartQuantity,CartItems}}>
            {children}
        </Shopingcart.Provider>
    )
}
