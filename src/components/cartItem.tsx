import {ShorpingCartContext} from '../context/storeContext'
import storageItems from '../data/items.json'
import Currency from '../utlities/CurrencyFormat'
type CartItemProps = {
quantity:number,
id:number
}

export function CartItem({id,quantity}:CartItemProps){
    const {removeItems}=  ShorpingCartContext()  
    const item = storageItems.find( i => i.id === id)

 if(item === null){
    return null
 }
 const price = item?.price
          
    return(
        <div className='flex justify-between  '>
                <div className='flex '>     
                        <div className=''>
                            <img className=" w-[150px] h-[100px] rounded-[15px] object-cover" src={item?.imgUrl} alt={item?.imgUrl} width='150px' />
                        </div>
                        <div>
                            <p>{item?.name}</p>
                            <p> X{quantity}</p>
                            <div>{Currency(price)}</div>
                        </div>
                </div>
                <div className='flex '>
                        <div >{Currency(price)}</div>
                        <button  className="bg-gray-400 hover:bg-gray-600 h-[60px] text-black font-bold py-2 px-4 rounded"onClick={()=>removeItems(id)} > - </button>
                </div>        
        </div>
    )
}