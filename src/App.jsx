import { useContext, useState } from "react"
import {Link} from 'react-router-dom'
import Navbar from "./Navbar"
import { Route,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Shorva from "./components/menu/Shorva"
import Products from "./pages/Products"
import DynamicPage from "./pages/DynamicPage"
import { TbMenuDeep } from "react-icons/tb";
import { ProductContext } from "./context/ProductContext"
import BurgerMenu from "./components/BurgerMenu"
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Salat from "./components/menu/Salat"
import Mangal from "./components/menu/Mangal"
import Pitsa from "./components/menu/Pitsa"
import Bar from "./components/menu/Bar"
import Xold from "./components/menu/Xold"
import Somsa from "./components/menu/Somsa"
import Xot from "./components/menu/Xot"
import Food from "./components/menu/Food"
import Desert from "./components/menu/Desert"
import Xleb from "./components/menu/Xleb"
import Garnir from "./components/menu/Garnir"
import Sousa from "./components/menu/Sousa"


export function App(){
  const { handleBurger, open, setOpen } = useContext(ProductContext)
  const Burger = () => {
    if (setOpen === false) {
      setOpen("")
    }
  }
  
  return(
   <div>
    <div className=" fixed  w-full top-0  shadow-lg z-40  shadow-[#4141411a] bg-white">
      <div className="flex justify-between  w-full px-7 max-w-[1400px] mx-auto py-2 bg-white">

      {/* <h1>qasr</h1> */}
      <Link to='/' >
      <img src="https://telegra.ph/file/35d2738dee830634025bb.jpg" className='w-[50px]' alt="" />
      </Link>
      {/* <h1>menu</h1> */}
      <div  onClick={() => {
        handleBurger(), open ? <BurgerMenu /> : ""
      }}>
      <TbMenuDeep className='text-[40px] text-orange-400' />
      </div>
              </div>
    </div>
    {open ? (
        <div className=" bg-white w-full h-screen fixed top-0 z-50 ">
          <div className=" flex justify-between items-center p-3">
            <button onClick={() => Burger(setOpen(false))}>
              <MdOutlineRestaurantMenu className=" text-[38px] text-orange-700 font-bold"/>
            </button>
            <span className="font-semibold text-orange-700 mr-[35%]">Популярные Блюда</span>
          </div>
          <BurgerMenu />
        </div>
      ) : (
        ""
      )};
    <Navbar />
    <Routes>
    <Route path="/" element={<Salat />} />
    <Route path="shorva" element={<Shorva />} />
    <Route path="salat" element={<Salat />} />
    <Route path="products" element={<Products />} />
    <Route path="mangal" element={<Mangal />} />
    <Route path="pitsa" element={<Pitsa />} />
    <Route path="bar" element={<Bar />} />
    <Route path="xold" element={<Xold />} />
    <Route path="somsa" element={<Somsa />} />
    <Route path="xot" element={<Xot />} />
    <Route path="food" element={<Food />} />
    <Route path="desert" element={<Desert />} />
    <Route path="xleb" element={<Xleb />} />
    <Route path="garnir" element={<Garnir />} />
    <Route path="sousa" element={<Sousa />} />
    <Route path="/products/:id" element={<DynamicPage />}/>
    </Routes>
   </div>
  )
}