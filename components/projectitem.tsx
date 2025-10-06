'use client'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import Image from "next/image"
import yotube from '@/public/SOCIAL MEDIA/YouTube_full-color_icon_(2024).svg.png'
import github from '@/public/SOCIAL MEDIA/github-6980894_1280.png'
export  const Projectitem:React.FC<{title:string,image:string,description:string,tech:string ,liveurl:string|null,video:string|null,frontend:string|null,backend:string|null}> =(props)=>{

return(
       <li className="w-full rounded-[10px] bg-[#000020]">
                <ItemGroup >
      
          <Item key={props.title} variant="outline" className="border-[#000020] border-4">
            <ItemHeader>
                <div  className="aspect-square w-full h-[250px] rounded-sm object-cover relative">
                      <Image
                src={props.image}
                alt={props.title}
               fill
                className="w-full h-full"
              />
                </div>
            
            </ItemHeader>
            <ItemContent className="text-[#0077b6] text-[0.8em] sm:text-[1em]">
              <ItemTitle className="text-[#0077b6] font-bold text-[1.4em] underline ">{props.title}</ItemTitle>
              <ItemDescription className="text-[#0077b6] font-semibold text-[1.1em]  overflow-auto  ">{props.description}</ItemDescription>
              <p className="text-[1.2em] font-bold">Technologies:-</p>
              <p className="text-[#0077b6] font-semibold text-[1.1em] ">{props.tech}</p>
              <p className="text-[1.2em] font-bold">Project Links :-</p>
                   <ul className="flex flex-row flex-wrap justify-center items-center h-[70px] sm:h-[50px] w-full gap-[2%] ">
                      <li className="w-[45%] sm:w-[23%] h-[45%] sm:h-full relative "> <a className="w-full h-full  text-[1em] sm:text-[1.2em] 
                      font-bold  flex justify-center
                       items-center cursor-pointer hover:underline " href={props.liveurl as string}>Live Demo</a> 
                       </li>
                    { props.video && <li className="w-[45%] sm:w-[23%] h-[45%] sm:h-full flex flex-row items-center justify-center gap-1  "> <div className=" relative w-[20%] h-[70%] ">
                         <Image alt="youtube" fill src={yotube.src} className=" absolute w-full h-full" ></Image></div>
                       <a className=" h-full hover:underline text-[1em] sm:text-[1.2em] font-bold  flex justify-center
                       items-center cursor-pointer" href={props.video}>Video Demo</a>
                       </li>}
                    {props.frontend &&   <li className="w-[45%] sm:w-[23%] h-[45%] sm:h-full flex flex-row items-center justify-center gap-1  "> <div className=" relative w-[20%] h-[70%] ">
                         <Image alt="youtube" fill src={github.src} className=" absolute w-full h-full" ></Image></div>
                       <a className=" h-full hover:underline text-[0.9em] sm:text-[0.9em] font-bold  flex justify-center
                       items-center cursor-pointer" href={props.frontend}>Frontend-Source</a>
                       </li>}
                          {props.backend && <li className="w-[45%] sm:w-[23%] h-[45%] sm:h-full flex flex-row items-center justify-center gap-1  "> <div className=" relative w-[20%] h-[70%] ">
                         <Image alt="youtube" fill src={github.src} className=" absolute w-full h-full" ></Image></div>
                       <a className=" h-full hover:underline text-[0.9em] sm:text-[0.9em] font-bold  flex justify-center
                       items-center cursor-pointer" href={props.backend}>Backend-Source</a>
                       </li>}
                      
                   </ul>
            </ItemContent>
          </Item>
    
      </ItemGroup>
       </li>

       
)

}