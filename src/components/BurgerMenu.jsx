// import React from 'react'
import { Link } from "react-router-dom"
import { GoChevronRight } from "react-icons/go"
import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const BurgerMenu = () => {
  // const {items} = useContext(ProductContext)
  // const {basket} = useContext(BasketContext)
  const { Burger,setOpen } = useContext(ProductContext)
  return (
    <div className="bg-white z-50 w-full">

    <div className="w-full h-screen p-3  z-50">
      <nav className="flex flex-col justify-center items-start gap-5 ">
        <div>
          <Link className={""} to="/"></Link>
        </div>
        
        <Link
        onClick={()=>Burger(setOpen(false))}
        className={
          " bg-orange-500 flex justify-between items-center p-3 w-full text-white rounded-2xl"
        }
        to="/somsa"
        >
          <span className=" font-semibold text-[14px]">
          СОМСА 3шт
          </span>
          <GoChevronRight className=" font-bold text-[33px] text-white"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
        className={
          "bg-[#FF972A] flex justify-between items-center p-3 w-full text-white rounded-2xl"
          }
          to="/xot"
          >
          <span className="text-[14px] font-semibold">
            ГОРЯЧИЕ БЛЮДА
          </span>
          <GoChevronRight className=" font-bold text-[33px] text-white"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
        className={
          " border-orange-500 border-[3px] flex justify-between items-center p-3 w-full text-orange-700 rounded-2xl"
          }
          to="/mangal"
          >
          <span className="text-[14px] font-semibold">МАНГАЛ БЛЮДА</span>
          <GoChevronRight className="  font-bold text-[33px]"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
        className={
          " border-orange-500 border-[3px] flex justify-between items-center p-3 w-full text-orange-700 rounded-2xl"
          }
          to="/food"
          >
          <span className="text-[14px] font-semibold">ФАСТ-ФУД</span>
          <GoChevronRight className="  font-bold text-[33px]"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
        className={
          " border-orange-500 border-[3px] flex justify-between items-center p-3 w-full text-orange-700 rounded-2xl"
          }
          to="/pitsa"
          >
          <span className="text-[14px] font-semibold">ПИЦЦА</span>
          <GoChevronRight className="  font-bold text-[33px]"/>
        </Link>
        <Link
        onClick={()=>Burger(setOpen(false))}
        className={
          " border-orange-500 border-[3px] flex justify-between items-center p-3 w-full text-orange-700 rounded-2xl"
          }
          to="/desert"
          >
          <span className="text-[14px] font-semibold">ДЕСЕРТЫ</span>
          <GoChevronRight className="  font-bold text-[33px]"/>
        </Link>
      </nav>
    </div>
          </div>
  )
}

export default BurgerMenu
