import React from "react" 
// import Cart from "../pages/cartpage"
import { CartBarContext } from "../context/storeContext";
import { NavLink, Link } from "react-router-dom";



export function Navbar(){
    const {setOpen,open}= CartBarContext()


    return(
        <>
    
            <div className="flex sticky top-0 z-[0]] bg-white  p-5 drop-shadow "  >
                <nav className=" ml-[30px] flex gap-x-7" >
                <Link to="/">Home</Link> 
                <NavLink to="/Store">Store</NavLink> 
                <NavLink to="/About">About</NavLink> 
                </nav>
            <button onClick={()=>setOpen(true)} className="ml-auto rounded-[90%] flex relative outline outline-offset-2 outline-2 ">
                     <svg className="  bg-white hover:bg-gray-400  w-10 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    <h4 className="bottom-0 w-5 h-5 absolute bg-red-600 rounded-[90%] text-white">3</h4>
            </button>
            </div>
        </>
        
    )
};