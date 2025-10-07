'use client'
import { motion } from "framer-motion"
import { Projectitem } from "../projectitem"
import modeximge from '@/public/projects/modexstore/modex.jpg'
import fastdishimge from '@/public/projects/fastdish/Capture.jpg'
import todo from '@/public/projects/todoapp/todoapp.jpg'
import oldportifilio from '@/public/projects/old portifilio/Screenshot 2025-02-25 100159.jpg'

export  function Projects(){

return(
           <div id="section-4" className="flex  flex-col w-full  items-center bg-[#1A2228] pb-[40px]  text-[3.7px] gap-[20px] sm:text-[4.5px] lg:text-[5px] xl:text-[7px] ">
       
                 <motion.h1 initial={{x:-180,opacity:0}} transition={{duration:2}} viewport={{once:true,amount:0.2}} whileInView={{x:0,opacity:100}} 
                 className="text-[6.5em] underline font-extrabold text-[#0077b6] mt-[20px]"> Projects</motion.h1>
                       <ul className="flex flex-col justify-center items-center w-[95%] sm:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]  gap-[20px] sm:gap-[30px]">
                             <Projectitem image={modeximge.src} liveurl={'https://modexstore.netlify.app/'} video={'https://youtu.be/pR-HC799oLM'}
                             frontend={'https://github.com/ahmed-rmdan/ModexStore'} backend={'https://github.com/ahmed-rmdan/ModexStore-backend'}
                              description="Modex Store is a full-stack E-Commerce web app with an integrated Admin Dashboard.
                              It provides a seamless shopping experience for users and full control for admins." tech="TypeScript , React.js , Talwindcss , redux toolkit , react router , React Query
, framer-motion , React- Leaflet, Nodejs , Express.js , MySQL , Prisma , REST APIs , GraphQl ,
JWT , Bcrypt.js , validator , Multer , Cloudinary , WebSocket , Pagination, Stripe.js ,
Nodemailer , Brevo , Vite , Ts-node-dev , Netlify , Render , Jest , React-test-library , supertest" title="ModexStore APP" ></Projectitem>
                         <Projectitem image={fastdishimge.src} liveurl={'https://fastdish.netlify.app/'} video={'https://youtu.be/rlxrCDxBuIE'}
                             frontend={'https://github.com/ahmed-rmdan/FastDish-frontend'} backend={'https://github.com/ahmed-rmdan/FastDish-backend'}
                              description="FastDish is a real life food order app that has a Beautiful user interface wich you can check the menu by 
                              selecting the type of the meal and search for the meal you want and you can add then in your favourite and to your cart
                               and add the number you want and purchase them by a very dynamic cart and making order and select payment and track order" 
                              tech="TypeScript , React.js , CSS , React Router , Context API , React- Leaflet ,
Nodejs , Express.js , REST APIs , MongoDB , mongoose , Express-validator , Authentication ,
Role Authorization , WebSocket , railway , Netlify
" title=" FastDish APP" ></Projectitem>
                         <Projectitem image={todo.src} liveurl={'https://tasks-timetracker.netlify.app/'} video={null}
                             frontend={'https://github.com/ahmed-rmdan/TODO__TIMETRRACKER-APP'} backend={null}
                              description="Add tasks to track the date and the time left to do the task ,with good slider to show the Tasks ." 
                              tech="html , CSS , TypeScript , MVC Architecture , Vite , local storage , Netlify" title="Task Tracking App " ></Projectitem>
                                <Projectitem image={oldportifilio.src} liveurl={'https://myportfolioapp-am.netlify.app/'} video={null}
                             frontend={'https://github.com/ahmed-rmdan/Myportfolio-app'} backend={null}
                              description="Designed and developed a personal portfolio website showcasing projects and skills with very good Scroll Animation ." 
                              tech="html , CSS , JavaScript , Parcel , Netlify" title="Old Personal Portfolio website " ></Projectitem>


                       </ul>

           
           </div>   
)

}