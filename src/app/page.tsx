import Image from "next/image";
import Chatbot from "./components/Chatbot";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { HeroFirst } from "./components/Herofirst";
import Feautures from "./components/Feautures";
import Lamp from "@/components/ui/lamp";

export default function Home() {
  return (
    <main >
      <div >
        <HeroFirst/>
      {/* <Hero/> */}
      <Lamp/>
      <Feautures/>
      {/* <Chatbot/> */}
      </div>
    </main>
  );
}
