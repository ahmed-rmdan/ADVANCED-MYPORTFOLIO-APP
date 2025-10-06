'use client'
import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import html from '@/public/skills/html.png'
import Image from "next/image"
import css from '@/public/skills/css.png'
import react from '@/public/skills/React-icon.png'
import tlawind from '@/public/skills/talwind.png'
import shadcn from '@/public/skills/shadcn-logo.png'

import nextjs from '@/public/skills/nextjs.png'
import mongodb from '@/public/skills/mongo.png'
import mysql from '@/public/skills/mysql.png'
import postgresql from '@/public/skills/postgre-sql-logo.png'
import prisma from '@/public/skills/Prisma-IndigoLogo.png'
import nodejs from '@/public/skills/nodejs.png'
import express from '@/public/skills/express.png'
import graphql from '@/public/skills/graphql-ar21~bgwhite.svg'
import socket from '@/public/skills/socket-io-icon.png'


import js from '@/public/skills/JavaScript-Symbol.png'
import ts from '@/public/skills/Typescript.png'
import cpp from '@/public/skills/cpp.png'

import jest from '@/public/skills/jest-js.png'
import cypress from '@/public/skills/cypress.png'
import swagger from '@/public/skills/swagger-logo.png'

import docker from '@/public/skills/docker-logo.png'
import kuber from '@/public/skills/kubernetes.png'

import firbase from '@/public/skills/firebase.png'
import cloud from '@/public/skills/cloudinary.png'
import nitlify from '@/public/skills/netlify.png'
import heroku from '@/public/skills/heroku.png'
import vercel from '@/public/skills/vercel.svg'
import railway from '@/public/skills/railway.png'

import visual from '@/public/skills/visual.png'
import npm from '@/public/skills/npm.png'
import vite from '@/public/skills/vite.png'
import webpack from '@/public/skills/webpack.png'
import nodemoon from '@/public/skills/nodemon-seeklogo.png'
import git from '@/public/skills/git.png'
import github from '@/public/skills/github.png'




export  const Skills:React.FC<{}> =()=>{

return(
           <div className="flex  flex-col w-full pb-10  items-center bg-[#000020] text-[3.7px] gap-[20px] sm:text-[4.5px] lg:text-[5.5px] xl:text-[7px] ">
       
                 <motion.h1 initial={{y:200,opacity:0}} transition={{duration:2}} animate={{y:0,opacity:100}} 
                 className="text-[6.5em] underline font-extrabold text-[#0077b6] mt-[20px]"> MY Skills</motion.h1>
                 <motion.div initial={{y:200,opacity:0}} transition={{duration:2}} animate={{y:0,opacity:100}} className="w-full flex justify-center items-center">
                     <Accordion className= " w-[95%] sm:w-[80%] lg:w-[60%]  2xl:w-[45%]" type="single" collapsible>
                         <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#0077b6] text-[4em] font-bold">Programming languages </AccordionTrigger>
             <AccordionContent className="text-[#0077b6] gap-[10px] flex flex-col  text-[1.2em]">
                           <p className="break-words">very stong knowledge in js Es6 , Typescript , c++  solid knowledge in opp , data structure , Algorithms ,
                             solid principle and problem solving  </p>
                            
                           <ul className="w-[75%] flex flex-row flex-wrap gap-y-[15px]  self-center items-center justify-evenly relative " > 
                            <li className="w-[30%] h-[45px] relative"><Image alt="js" fill className="w-full h-full absolute " src={js.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="ts" fill className="w-full h-full absolute " src={ts.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="css" fill className="w-full h-full absolute " src={cpp.src}></Image></li>
                                                          
                           </ul>
            </AccordionContent>
                </AccordionItem>
                    
              <AccordionItem value="item-2">
            <AccordionTrigger className="text-[#0077b6] text-[4em] font-bold">Frontend Development</AccordionTrigger>
             <AccordionContent className="text-[#0077b6] gap-[10px] flex flex-col  text-[1.2em]">
                           <p className="break-words">develp a solid user experience Responsive and seo friendly aplication with the most modern Technologies</p>
                            <p className="text-[1.2em] font-semibold ">Technologies:-</p>
                           <ul className="w-[75%] flex flex-row flex-wrap gap-y-[15px] items-center self-center justify-evenly relative " > 
                            <li className="w-[30%] h-[45px] relative"><Image alt="html" fill className="w-full h-full absolute " src={html.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="css" fill className="w-full h-full absolute " src={css.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="css" fill className="w-full h-full absolute " src={tlawind.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="shadcn" fill className="w-full h-full absolute " src={shadcn.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="css" fill className="w-full h-full absolute " src={react.src}></Image></li>
                             <li className="w-[30%] h-[45px] relative"><Image alt="css" fill className="w-full h-full absolute " src={nextjs.src}></Image></li>                             
                           </ul>
            </AccordionContent>
                </AccordionItem>
                        <AccordionItem value="item-3">
            <AccordionTrigger className="text-[#0077b6] text-[4em] font-bold">Backend Development</AccordionTrigger>
             <AccordionContent className="text-[#0077b6] gap-[10px] flex flex-col  text-[1.2em]">
                           <p>Develp a scalable secure real-time and high performance Backend Aplications </p>
                            <p className="text-[1.2em] font-semibold ">Technologies:-</p>
                           <ul className="w-[75%] flex flex-row flex-wrap gap-y-[15px] items-center self-center justify-evenly relative " > 
                            <li className="w-[30%] h-[45px] relative"><Image alt="mongodb" fill className="w-full h-full absolute " src={mongodb.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="mysql" fill className="w-full h-full absolute " src={mysql.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="postgresql" fill className="w-full h-full absolute " src={postgresql.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="postgresql" fill className="w-full h-full absolute " src={prisma.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="nodejs" fill className="w-full h-full absolute " src={nodejs.src}></Image></li>
                             <li className="w-[30%] h-[45px] relative"><Image alt="css" fill className="w-full h-full absolute " src={express.src}></Image></li> 
                             <li className="w-[30%] h-[45px] relative"><Image alt="css" fill className="w-full h-full absolute " src={graphql.src}></Image></li>
                             <li className="w-[30%] h-[45px] relative"><Image alt="socket" fill className="w-full h-full absolute " src={socket.src}></Image></li>                                 
                           </ul>
            </AccordionContent>
                </AccordionItem>
                          <AccordionItem value="item-4">
            <AccordionTrigger className="text-[#0077b6] text-[4em] font-bold">Testing</AccordionTrigger>
             <AccordionContent className="text-[#0077b6] flex flex-col gap-[10px]  text-[1.2em]">
                           <p> solid experience in testing frontend using react-test-library and jest , testing backend using jest and supertest , solid experience in E2E testing 
                            using cypress , also testing api using postman , and api documentation using swagger , and test driven development (TDD) </p>
                            <p className="text-[1.2em] font-semibold ">Technologies:-</p>
                           <ul className="w-[75%] flex flex-row flex-wrap gap-y-[15px] self-center items-center justify-evenly relative " > 
                            <li className="w-[30%] h-[45px] relative"><Image alt="mongodb" fill className="w-full h-full absolute " src={jest.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="mysql" fill className="w-full h-full absolute " src={cypress.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="postgresql" fill className="w-full h-full absolute " src={swagger.src}></Image></li>
                                                       
                           </ul>
            </AccordionContent>
                </AccordionItem>
                               <AccordionItem value="item-5">
            <AccordionTrigger className="text-[#0077b6] text-[4em] font-bold">Devops</AccordionTrigger>
             <AccordionContent className="text-[#0077b6] flex flex-col  gap-[10px]  text-[1.2em]">
                           <p> solid experience in dockerization using docker and basic knowledge in using kubernetes </p>
                            <p className="text-[1.2em] font-semibold ">Technologies:-</p>
                           <ul className="w-[75%] flex flex-row flex-wrap gap-y-[15px] self-center  items-center  justify-evenly relative " > 
                            <li className="w-[30%] h-[45px] relative"><Image alt="docker" fill className="w-full h-full absolute " src={docker.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="kubernetes" fill className="w-full h-full absolute " src={kuber.src}></Image></li>
                              
                                                       
                           </ul>
            </AccordionContent>
                </AccordionItem>
                                   <AccordionItem value="item-6">
            <AccordionTrigger className="text-[#0077b6] text-[4em] font-bold">Cloud & Deployment</AccordionTrigger>
                          <AccordionContent className="text-[#0077b6] flex flex-col  gap-[10px]  text-[1.2em]">
                            <p> using firbase , cloudinary , nitlify , heroku , vercel and raliway to deploy frontend & backend and upload images </p>
                            
                           <ul className="w-[75%] flex flex-row flex-wrap gap-y-[15px] self-center  items-center  justify-evenly relative " > 
                            <li className="w-[30%] h-[45px] relative"><Image alt="mongodb" fill className="w-full h-full absolute " src={firbase.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="mysql" fill className="w-full h-full absolute " src={cloud.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="postgresql" fill className="w-full h-full absolute " src={nitlify.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="postgresql" fill className="w-full h-full absolute " src={heroku.src}></Image></li>                                                        
                              <li className="w-[30%] h-[45px] relative"><Image alt="postgresql" fill className="w-full h-full absolute " src={vercel}></Image></li>   
                              <li className="w-[30%] h-[45px] relative"><Image alt="postgresql" fill className="w-full h-full absolute " src={railway.src}></Image></li>   
                           </ul>
                         </AccordionContent>
                                </AccordionItem>
                                                   <AccordionItem value="item-7">
            <AccordionTrigger className="text-[#0077b6] text-[4em] font-bold">Tools</AccordionTrigger>
                          <AccordionContent className="text-[#0077b6] flex flex-col  gap-[10px]  text-[1.2em]">
                           <ul className="w-[75%] flex flex-row flex-wrap gap-y-[15px] self-center  items-center  justify-evenly relative " > 
                            <li className="w-[30%] h-[45px] relative"><Image alt="visual" fill className="w-full h-full absolute " src={visual.src}></Image></li>
                            <li className="w-[30%] h-[45px] relative"><Image alt="npm" fill className="w-full h-full absolute " src={npm.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="vite" fill className="w-full h-full absolute " src={vite.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="webpack" fill className="w-full h-full absolute " src={webpack.src}></Image></li>                                                        
                              <li className="w-[30%] h-[45px] relative"><Image alt="nodemoon" fill className="w-full h-full absolute " src={nodemoon.src}></Image></li>
                              <li className="w-[30%] h-[45px] relative"><Image alt="git" fill className="w-full h-full absolute " src={git.src}></Image></li>                                                        
                              <li className="w-[30%] h-[45px] relative"><Image alt="github" fill className="w-full h-full absolute " src={github.src}></Image></li>    
                              
                           </ul>
                         </AccordionContent>
                                </AccordionItem>

                   </Accordion>
                 </motion.div>
                  

           
           </div>   
)

}