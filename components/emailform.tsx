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
export function Dialogemail() {
  return (
    <Dialog   >
      <form  >
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-[#0077b6] text-white border-none h-[30%]
           sm:h-[50%] min-w-[90%] sm:w-[80%] xl:w-full xl:h-full text-[0.8em] sm:text-[0.7em] 
           hover:bg-[#023047] hover:text-white hover:cursor-pointer">SEND EMAIL</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] z-[20000]">
          <DialogHeader>
            <DialogTitle >Send Email To ME</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" type="text" name="name" placeholder="Your Name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Your Email</Label>
              <Input id="username-1" type="email" name="email" placeholder="Your Email" />
            </div>
             <div className="grid gap-3">
              <Label htmlFor="content">Your Message</Label>
              <Textarea id="content" name="content" ></Textarea>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="hover:cursor-pointer" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-[#0077b6] hover:cursor-pointer hover:bg-[#023047]"  >Send Message</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}