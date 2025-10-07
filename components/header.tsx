'use client'

import { Dialogemail } from "./emailform";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AlignJustify } from 'lucide-react';
import { useState,useEffect } from "react";

import {motion} from 'framer-motion'
import { AnimatePresence } from "framer-motion";
import githublogo from '@/public/SOCIAL MEDIA/github-6980894_1280.png'
import linkedlogo from  '@/public/SOCIAL MEDIA/linkdin.png'
import youtubelogo from '@/public/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'
import { Contact } from "./contact";

export function Header(){
    
const [width,setwidth]=useState<number>(0)
const [menu,setmenu]=useState<boolean>(false)

useEffect(()=>{
setwidth(window.screen.width)
  window.addEventListener('resize',()=>{
     const size=window.screen.width
     setwidth(size)

  })

},[width])

function handleclick(){
    setmenu(prev=>!prev)
}

function handlenavigate(input:string){
  const section=document.getElementById(`section-${input}`)
  section?.scrollIntoView({behavior:'smooth'})
}


if(width>=768){
return(
           <nav className="flex flex-row sticky  top-0  z-[10000]  min-w-full  p-5  
           justify-between   items-center bg-[#1A2228] text-white text-[2.5px] sm:text-[3.5px]   lg:text-[4px] xl:flex-row xl:text-[4px] 2xl:text-[4.5px] min-h-[30px]   ">
             <button onClick={()=>{handlenavigate('1')}} className=" text-center text-[#0077b6] font-extrabold w-[40%] sm:w-[25%] 2xl:w-[20%] sm:text-[6em] md:w-[28%] lg:text-[6.5em] 
               xl:w-[20%] xl:text-[7em] hover:cursor-pointer   "><h1  > AHMED RAMADAN</h1></button>
             <div className="flex flex-row items-center justify-center gap-[8%]   sm:min-w-[60%] text-[3em]
              text-white font-semibold md:w-[55%]  lg:w-[65%]  2xl:w-[50%] md:text-[4em] lg:text-[4em]   xl:text-[5em]  ">
                <div className="flex min-w-[55%] md:text-[0.85em] lg:text-[1em] text-[#0077b6]  h-full justify-center items-center gap-[16%]">
                       <button onClick={()=>{handlenavigate('2')}}  className="hover:underline hover:cursor-pointer" > AboutMe</button>
                <button  onClick={()=>{handlenavigate('3')}} className="hover:underline hover:cursor-pointer" > Skills</button>
                 <button  onClick={()=>{handlenavigate('4')}}  className="hover:underline hover:cursor-pointer"> Projects</button>
                 <Contact></Contact>
                </div>
              
               <div className=" flex flex-wrap  w-[25%] sm:min-w-[13.5%]   items-center gap-1 xl:gap-2 md:flex-row">
                   
                       <Dialogemail></Dialogemail>
                         </div>
               <div className=" w-[20%] xl:min-w-[17%] flex flex-row  items-center gap-[3%] justify-around max-h-[90%] ">
                      <a href="https://github.com/ahmed-rmdan" className="min-w-[23%] min-h-[30px] max-h-[30px] relative ">  <Image alt="github-logo" 
                      className="  max-w-full max-h-full " fill 
                       src={githublogo.src}></Image>    </a>
                            <a href="https://www.linkedin.com/in/ahmed-ramadan-63a4272b9/" className="min-w-[23%] min-h-[25px] max-h-[30px] relative ">
                              <Image fill  alt='linkdin-logo' src={linkedlogo.src} className="  max-w-full max-h-full "></Image>    </a>
                             <a href="https://www.youtube.com/@ahmedrmadan2406 " className="min-w-[23%] min-h-[20px] max-h-[20px] relative ">  
                             <Image alt="youtube-logo" fill src={youtubelogo.src}className="  max-w-full max-h-full "></Image>    </a> 
               </div>
                
         
             </div> 
               

                                   
           </nav>
    )
}
else {
  return(
<nav className="flex flex-row sticky top-0 bg-[#1A2228] z-[10000]  min-w-full  p-6  justify-between 
  items-center text-black text-[2.5px]  min-h-[20px]   ">
             <div className="flex flex-row w-[100%] text-[1em] items-center gap-[8%]">
               <AlignJustify color="#0077b6" onClick={handleclick}></AlignJustify>
              <Link href={'/'} className=" text-center text-[#0077b6] font-extrabold text-[5.5em] w-[60%] 
              ]  ">AHMED RAMADAN</Link>
              <div className=" flex flex-wrap  w-[25%]  text-[10px] items-center  ">
                   
                       <Dialogemail ></Dialogemail>
                         </div>
             </div>
             <AnimatePresence>
             {menu?<motion.div initial={{width:0,opacity:0}} animate={{width:150,opacity:100}} transition={{duration:0.5}}
              exit={{width:0,opacity:0}} className="flex flex-col absolute left-0 top-[48px] h-[850px] w-[30%] 
              items-center justify-start bg-[#1A2228]   ">

                
                         <div className="flex flex-col w-full mt-[50px] h-[100%] items-center justify-start gap-[1%] text-[13px] 
              text-white font-semibold  ">
                <div className="flex flex-col w-[40%] text-[#0077b6] h-[30%] justify-center items-center gap-[20%]">
                  <button onClick={()=>{handlenavigate('2')}}  className="hover:underline hover:cursor-pointer" > AboutMe</button>
                <button  onClick={()=>{handlenavigate('3')}} className="hover:underline hover:cursor-pointer" > Skills</button>
                 <button  onClick={()=>{handlenavigate('4')}}  className="hover:underline hover:cursor-pointer"> Projects</button>
                    <Contact></Contact>
                </div>
              
             
               <div className=" w-[75%] h-[15%]  flex flex-col mt-[25px]  items-center gap-[8%] justify-around  ">
                      <a href="https://github.com/ahmed-rmdan" className="min-w-[30%] min-h-[30px] max-h-[30px] relative ">  <Image alt="github-logo" 
                      className="  max-w-full max-h-full " fill 
                       src={githublogo.src}></Image>    </a>
                            <a href="https://www.linkedin.com/in/ahmed-ramadan-63a4272b9/" className="min-w-[30%] min-h-[25px] max-h-[30px] relative ">
                              <Image fill  alt='linkdin-logo' src={linkedlogo.src} className="  max-w-full max-h-full "></Image>    </a>
                             <a href="https://www.youtube.com/@ahmedrmadan2406 " className="min-w-[25%] min-h-[20px] max-h-[20px] relative ">  
                             <Image alt="youtube-logo" fill src={youtubelogo.src}className="  max-w-full max-h-full "></Image>    </a> 
               </div>
                
         
             </div> 
                   
       
                
            </motion.div>: ''}


             </AnimatePresence>
         
      
          

                         
           </nav>

  )
}
    
}