import { Welcome } from "@/components/sections/wlcome";
import { Aboutme } from "@/components/sections/aboutme";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
export default function Home() {
  return (
   <main>
 <Welcome></Welcome>
 <Aboutme></Aboutme>
 <Skills></Skills>
 <Projects></Projects>
   </main>
     
  );
}
