import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Zap } from 'lucide-react';
export function Contact() {
  return (
         <Dialog >
  <DialogTrigger className="hover:underline hover:cursor-pointer ">Contact</DialogTrigger>
  <DialogContent className="z-[20000]">
    <DialogHeader>
      <DialogTitle className="text-[#023e8a] text-[1.8em] font-bold underline">Contact ME</DialogTitle>
      <DialogDescription >
            
      </DialogDescription>
    </DialogHeader>
                 <div className=" text-[#0077b6] font-bold flex flex-col w-full justify-center items-center text-[0.85em] md:text-[1.3em] mt-[20px] gap-[40px]">
                                 <div className="flex flex-row items-center justify-center">
                       <Mail size={'1.2em'}></Mail>
                       EMAIL : ahmedrmadan251998@gmail.com
                   </div>

                <div className="flex flex-row items-center justify-center">
                   <Phone size={'1.2em'}></Phone>
                        TELPHONE : +20 1146277055
                </div>
                              
                           
                        </div>
  </DialogContent>
</Dialog>
  )
}