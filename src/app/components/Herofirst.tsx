import React from "react";
import { Vortex } from "../../components/ui/vortex";

export function HeroFirst() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[40rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
        Struggling with outdated code? 
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
        Upgrade to modern solutions effortlessly with our project.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a href="/translation">  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            translate Your Code now
          </button></a>
        <a href="/document">
        <button className="px-4 py-2  text-white ">Get Documentation</button>
        </a>
         
        </div>
      </Vortex>
    </div>
  );
}
