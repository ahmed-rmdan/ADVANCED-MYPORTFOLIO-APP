'use client'
import { motion } from "framer-motion"


export  function Aboutme(){

return(
           <div id="section-2" className="flex  flex-col w-full min-h-[450px] items-center bg-[#1A2228] text-[3.7px] gap-[20px] sm:text-[4.5px] lg:text-[5px] xl:text-[7px] ">
       
                 <motion.h1  initial={{x:100,opacity:0}} transition={{duration:2}} viewport={{once:true,amount:0.3}} whileInView={{x:0,opacity:100}} 
                 className="text-[6.5em] underline font-extrabold text-[#0077b6] mt-[20px]"> About ME</motion.h1>
                    <motion.p  initial={{x:100,opacity:0}} transition={{duration:2}} viewport={{once:true,amount:0.3}} whileInView={{x:0,opacity:100}} 
                    className="text-[#0077b6]  text-[4em] w-[90%] sm:w-[80%] lg:w-[70%] 2xl:w-[50%] text-center break-words leading-loose xl:leading-normal "> 
                        Full Stack Developer with hands-on experience building web applications through Large
projects.  Skilled in front-end and back-end development with a strong foundation in modern
web technologies. Passionate about creating efficient, scalable, and user-friendly applications
with focusing in clean code and best practice concepts and search engine optimization (SEO)
with a very good knowledge in computer science fundamentals , ready to work in a team 

                         </motion.p>

           
           </div>   
)

}