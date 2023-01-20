import React from "react";
import {Routes, Route} from "react-router-dom"
import './index.css';
import {Home} from "./pages/Home";
import {Store} from "./pages/Store";
import {About} from "./pages/About";
import { Navbar } from "./components/Navbar";
import {StoreContextProvider} from "./context/storeContext";
import Cartpage from "./pages/Cartpage";
import { CartBarContext } from "./context/storeContext";

export function App() {
  const {open}= CartBarContext()


  

  return (
       <StoreContextProvider> 
            <div className='mb-4 relative '> 
            { //if open state is true then display CartPage
              open && <Cartpage/>
            }
                 <Navbar/>
                         
                    <Routes>                     
                        <Route path="/" element={<Home/>}/> 
                        <Route path="/Store" element={<Store/>}/> 
                        <Route path="/About" element={<About/>}/> 
                    </Routes>
                  </div>
       </StoreContextProvider>
          
  );
}

export default App;
