import storageItems from '../data/items.json'
import StoreItem  from '../components/StoreItem'

export function Store(){
    return(
   <>
        <h1 className='text-bold'>Store</h1>

                <div className=' p-8 grid lg:grid-cols-3 md:grid-cols-1 gap-8'>
                  {storageItems.map(item=>(
            <div><StoreItem {...item}/></div>
          ))} 
      </div>
   </ >
    )
};