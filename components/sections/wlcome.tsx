'use client'
import React from "react";
import { motion } from "framer-motion";
import { useState,useEffect } from "react"; 
const types=['Full Stack Developer','React / Next.js Developer','Node.js Developer','Express.js Developer']
import { Social } from "../socialmedia";
import Image from "next/image";
import bcimg from '@/public/artistic-blurry-colorful-wallpaper-background.jpg'
import { Button } from "@/components/ui/button"
export  const Welcome:React.FC<{}> =()=>{

const [typeindex, settypeindex] = useState<number>(0);

useEffect(() => {
  const interval = setInterval(() => {
    settypeindex((prev) => (prev < 3 ? prev + 1 : 0));
  }, 4000);

  return () => clearInterval(interval);
}, []);
return(
           <div className=" relative flex flex-col w-full justify-center items-center text-black h-[600px] sm:h-[650px]  text-[2.5px] md:text-[4.5px] md:h-[750px]
            lg:h-[850px] lg:text-[5px] xl:text-[7px] gap-[40px] sm:gap-[50px] xl:gap-[70px] ">
                      <Image  alt="Background img" src={bcimg.src}  className=" absolute" fill ></Image>
                <div className="flex w-full  items-center justify-center flex-col ">
                <motion.p initial={{x:-250,opacity:0}} transition={{duration:1.2}} animate={{x:0,opacity:100}} className="text-center font-semibold  
                  text-white text-[9em] leading-[65px] sm:leading-[80px] lg:leading-[100px] xl:leading-[140px] ">
                    <span className="text-white relative  text-[1.5em] z-10">
                        HELLO I'am AHMED a 
                        </span> 
                     
                     <br  />
                
                    <motion.span className="text-[#0077b6] text-center text-[1.1em] font-bold relative" >     
                           <motion.span key={typeindex}  initial={{width:'110%'}} transition={{duration:4,repeat:Infinity}} animate={{width:['110%','-10%','110%']}} 
                             className="absolute top-0 right-[0%] max-w-full text-[10em] h-full z-10 bg-[#000010] border-l-[1px]  border-[#0077b6]">
                        
                               </motion.span  > {types[typeindex]}
                        
                        </motion.span> 
                        
                        
                </motion.p>

         
                </div>
                <Button className="relative  w-[20%] sm:w-[14%] xl:w-[12%] font-bold h-[40px] sm:h-[50px]
                 text-[4.5em] bg-[#0077b6] hover:cursor-pointer hover:underline hover:bg-[#023047]"> MY CV </Button>


                <Social></Social>
                 
                    

           
           </div>   
)
}