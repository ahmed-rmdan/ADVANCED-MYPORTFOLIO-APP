'use client'
import React from "react";


import { Social } from "../socialmedia";
import { Contact } from "../contact";
import { Dialogemail } from "../emailform";
import { motion } from "framer-motion";
export function End(){
    return(<>
    <section   className="flex flex-col items-center justify-center gap-[2%] w-full min-h-[120px]  sm:min-h-[190px] sm:max-h-[190px] bg-[#000020]
     text-[#0077b6] text-[0.65em] md:text-[1em] xl:text-[1.2em]  ">
        <motion.div initial={{x:200,opacity:0}}  transition={{duration:2}} viewport={{once:true,amount:0.3}} whileInView={{x:0,opacity:100}} className="flex flex-row
         font-semibold items-center justify-around w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-[1.25em] h-[50px] md:h-[60px] " >
         <Contact></Contact>
         
             
         <Dialogemail></Dialogemail>
         
        </motion.div>
       <motion.div initial={{x:200,opacity:0}}  transition={{duration:2}} viewport={{once:true,amount:0.3}} whileInView={{x:0,opacity:100}} className="flex flex-col w-full 
       items-center justify-center gap-[19%] h-[100px]">
           <h2 className="underline font-bold text-[1.6em]">Keep in Touch</h2>
                   <Social></Social>

       </motion.div>
   
    </section >


     <section  className="font-semibold bg-black min-h-[35px] flex items-center justify-center sm:h-[50px] text-[8px] sm:text-[16px] text-white">
      <motion.div initial={{x:-200,opacity:0}}  transition={{duration:2}} viewport={{once:true,amount:0.3}} whileInView={{x:0,opacity:100}} 
      className="flex flex-row items-center  w-full h-full justify-around ">
           <p>ahmed-rarmadan-portfolio.vercel.app@2025</p>
                  <p>ahmedrmadan251998@gmail.com</p>
      </motion.div>
               
                  
         </section>
    </>
        


    )
}