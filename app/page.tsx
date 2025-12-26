import { Welcome } from "@/components/sections/wlcome";
import { Aboutme } from "@/components/sections/aboutme";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { End } from "@/components/sections/end";
export default function Home() {
  return (
   <main >
 <Welcome></Welcome>
 <Aboutme></Aboutme>
 <Skills></Skills>
 <Projects></Projects>
 <End></End>
   </main>
     
  );
}
