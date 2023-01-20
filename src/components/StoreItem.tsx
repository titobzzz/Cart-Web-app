import Currency from "../utlities/CurrencyFormat";
import {ShorpingCartContext} from "../context/storeContext"

type storeItemsData={
    id:number,
      name:string,
      price:number,
      imgUrl:string
}

 export default function StoreItem({id,name,imgUrl,price}:storeItemsData) {
    
    const {
        getItemQuantity,
        increaseQuantityOfItems,
        decreaseQuantityOfItems,
        removeItems
    }= ShorpingCartContext()
    let quantity = getItemQuantity(id)
    console.log(quantity)
            return(
               <div key={id}>
                    <img className=" w-full h-[250px] rounded-[15px] object-cover" src={imgUrl} alt="Img" />
                    <div className="flex justify-between">
                        <div>
                            {name}
                        </div>
                        <div>
                            {Currency(price)}
                        </div>
                    </div>
                    {/* make a ternary statement to display if the cart has something in it then we can add, remove and subtract else we only can add */}
                    <div>
                           { quantity === 0 ? <button className="bg-black text-white w-[100%] rounded-[15px] p-2" onClick={()=>increaseQuantityOfItems(id)}> + Add to cart</button>
                       : <div className="flex gap-5 flex-col max-width-[50px] items-center">
                            <div className="flex items-center gap-8 ">
                                <button className="bg-black text-white rounded-[5px] p-[13px]" onClick={()=>increaseQuantityOfItems(id)}>+</button>
                                <h2>{quantity} in cart</h2>
                                < button className="bg-black text-white rounded-[5px] p-[13px]" onClick={()=>decreaseQuantityOfItems(id)}>-</button>
                            </div>
                            <button className="bg-red-700  text-white rounded-[10px] p-2 px-4" onClick={()=>removeItems(id)}>Remove</button>
                        </div>} </div>
               </div> 
            )
        }