'use client'
import React from "react";


import githublogo from '@/public/SOCIAL MEDIA/github-6980894_1280.png'
import linkedlogo from  '@/public/SOCIAL MEDIA/linkdin.png'
import youtubelogo from '@/public/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'
import Image from "next/image";

export  const Social:React.FC<{}> =()=>{

return(
        
                             <div className=" w-[35%] sm:w-[25%] 2xl:w-[22%]  flex flex-row  items-center gap-[4%] justify-around max-h-[90%] ">
                      <a href="https://github.com/ahmed-rmdan" className="min-w-[23%] min-h-[30px] max-h-[30px] relative ">  <Image alt="github-logo" 
                      className="  max-w-full max-h-full " fill 
                       src={githublogo.src}></Image>    </a>
                            <a href="https://www.linkedin.com/in/ahmed-ramadan-63a4272b9/" className="min-w-[23%] min-h-[25px] max-h-[30px] relative ">
                              <Image fill  alt='linkdin-logo' src={linkedlogo.src} className="  max-w-full max-h-full "></Image>    </a>
                             <a href="https://www.youtube.com/@ahmedrmadan2406 " className="min-w-[23%] min-h-[20px] max-h-[20px] relative ">  
                             <Image alt="youtube-logo" fill src={youtubelogo.src}className="  max-w-full max-h-full "></Image>    </a> 
                        </div>

           
         
)
}