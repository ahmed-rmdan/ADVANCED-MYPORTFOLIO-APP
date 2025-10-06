
import React from "react";

import githublogo from '@/public/SOCIAL MEDIA/github-6980894_1280.png'
import linkedlogo from '@/public/SOCIAL MEDIA/linkdin.png'
import youtubelogo from '@/public/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'
import { Social } from "../socialmedia";
import { Contact } from "../contact";
import { Dialogemail } from "../emailform";
export const End:React.FC<{}>=()=>{
    return(<>
    <section className="flex flex-col items-center justify-center gap-[2%] w-full h-[120px] sm:h-[190px] bg-[#000020]
     text-[#0077b6] text-[0.65em] md:text-[1em] xl:text-[1.2em]  ">
        <div className="flex flex-row font-semibold items-center justify-around w-[90%] sm:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] text-[1.25em] h-[50px] md:h-[60px] " >
         <Contact></Contact>
         
             
         <Dialogemail></Dialogemail>
         
        </div>
       <div className="flex flex-col w-full items-center justify-center gap-[19%] h-[100px]">
           <h2 className="underline font-bold text-[1.6em]">Keep in Touch</h2>
                   <Social></Social>

       </div>
   
    </section>


     <section className="flex flex-row items-center  justify-around font-semibold bg-black h-[35px] sm:h-[50px] text-[9.5px] sm:text-[16px] text-white">
                  <p>modexstore.netlify.app@2025</p>
                  <p>ahmedrmadan251998@gmail.com</p>
                  
         </section>
    </>
        


    )
}