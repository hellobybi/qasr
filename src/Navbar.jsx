import React from 'react'
import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';


// import required modules
import { Scrollbar } from 'swiper/modules';

// import './styles.css';

// import required modules


const Navbar = () => {
  return (
    <div className='mt-14 w-full mx-auto max-w-[1200px]'>
    <Swiper
    slidesPerView={5}
        scrollbar={{
          hide: true,
        }}
        breakpoints={{
          750: {
            slidesPerView: 5,
            spaceBetween: 0
          }
        }}
        modules={[Scrollbar]}
        className=" py-3 font-semibold w-full flex justify-center gap-2 items-center"
      >
        {/* <SwiperSlide>

      <NavLink to="/" className={'absolute'}></NavLink>
        </SwiperSlide> */}
        <SwiperSlide className=''>

<NavLink to="salat">CАЛАТЫ</NavLink>
  </SwiperSlide>
  <SwiperSlide>

<NavLink to="mangal">МАНГАЛ БЛЮДА</NavLink>
  </SwiperSlide>
  

        <SwiperSlide>

      <NavLink to="shorva">СУПЫ</NavLink>
        </SwiperSlide>
        <SwiperSlide className=''>

      <NavLink to="somsa">СОМСА 3 ШТ</NavLink>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide className='mx-5'>

<NavLink className={' flex justify-center items-center gap-2'} to="xot"><span>ГОРЯЧИЕ</span> <span>БЛЮДА</span> </NavLink>
  </SwiperSlide>
  {/*  */}
  <SwiperSlide className=''>

      <NavLink to="food">ФАСТ-ФУД</NavLink>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide className=''>

      <NavLink to="pitsa">ПИЦЦА</NavLink>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide className=''>

      <NavLink to="desert">ДЕСЕРТЫ</NavLink>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide className=''>

      <NavLink to="xleb">ХЛЕБ</NavLink>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide className=''>

      <NavLink to="garnir">ГАРНИРЫ</NavLink>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide className=''>

      <NavLink to="sousa">СОУСА</NavLink>
        </SwiperSlide>
        {/*  */}
        <SwiperSlide className=''>

<NavLink className={' flex justify-center items-center gap-2'} to="xold"><span>ХОЛОДНЫЕ</span> <span>НАПИТКИ</span> </NavLink>
  </SwiperSlide>
  <SwiperSlide className='pr-8'>

<NavLink to="bar">БАР</NavLink>
  </SwiperSlide>
        
        
  
        {/* <SwiperSlide className=''>

      <NavLink to="products">ПРОДУКТЫ</NavLink>
        </SwiperSlide>
       */}
      </Swiper>
      
    </div>
  )
}

export default Navbar