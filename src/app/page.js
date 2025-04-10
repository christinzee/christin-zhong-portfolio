import { About } from "@/components/About";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex justify-between h-full max-w-screen-xl overflow-y-auto scrollbar-hide smooth-scroll ">
      <header className="sticky top-0 flex flex-col justify-between w-[48%] h-full">
        <Profile />
      </header>
      <main className="w-[48%] ">
        <About />
        <Projects />
      </main>
    </div>
  );
}
