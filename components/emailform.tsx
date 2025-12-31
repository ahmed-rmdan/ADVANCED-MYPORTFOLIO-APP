import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "sonner"

import { useState } from "react"
export function Dialogemail() {

const [errmsg,seterrmsg]=useState<string | null>(null)
const [loading,setloading]=useState<boolean>(false)
async function handlesubmit(ev:React.FormEvent<HTMLFormElement>){

  ev.preventDefault()
 
  
  const data=new FormData(ev.currentTarget)

  const formdata=Object.fromEntries(data.entries())
   setloading(true)        
 try{
    const res=await fetch('https://ahmed-rarmadan-portfolio.vercel.app/email',{
  method:'POST'
  ,
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body:JSON.stringify(formdata)

    })
    if(!res.ok){
        throw new Error('failed to send email')
    }
    setloading(false)
        seterrmsg(null)
    
   toast.success('Email sent successfully!')
 }catch(err){
    setloading(false)
    seterrmsg("failed to send email , please try again later" )
    return
 }


}

  return (
    <Dialog >
      
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-[#0077b6] text-white border-none h-[30%]
           sm:h-[50%] w-[90%]  xl:w-full xl:h-full text-[0.8em] sm:text-[0.7em] 
           hover:bg-[#023047] hover:text-white hover:cursor-pointer">SEND EMAIL</Button>
        </DialogTrigger>
        <DialogContent className=" z-[20000] w-[90%] text-[#0077b6]">
          <DialogHeader>
            <DialogTitle className="text-[#0077b6] font-bold" >Send Email To ME</DialogTitle>
        
          </DialogHeader>
          <form   onSubmit={handlesubmit} >
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1" >Name</Label>
              <Input id="name-1" type="text" name="name" placeholder="Your Name" required/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Your Email</Label>
              <Input id="username-1" type="email" name="email" placeholder="Your Email" required />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="content">Your Message</Label>
              <Textarea id="content" name="content" required></Textarea>
            </div>
          </div>
          { errmsg && <p className="w-full mt-[10px] text-center text-red-700">{errmsg}</p>}
           <Button type="submit" className="bg-[#0077b6] hover:cursor-pointer hover:bg-[#023047] mt-[15px]"  >{loading ? <Spinner /> : 'Send Message'}</Button>
            </form >
          <DialogFooter className="">
            <DialogClose asChild>
              <Button className="hover:cursor-pointer" variant="outline">Cancel</Button>
            </DialogClose>
           
          </DialogFooter>
          
        </DialogContent>
    
    </Dialog>
  )
}