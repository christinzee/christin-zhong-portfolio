import { About } from "@/components/About";
import { Profile } from "@/components/Profile";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-between h-full lg:max-w-screen-xl overflow-y-auto scrollbar-hide smooth-scroll ">
      <header className="lg:sticky top-0 flex flex-col justify-between w-full lg:w-[48%] h-full">
        <Profile />
      </header>
      <main className="lg:w-[48%] ">
        <About />
        <Projects />
      </main>
    </div>
  );
}
