import React from "react";
import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export const TextHero = () => {
  return (
    <div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className=" tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hi, I&apos;m Alejandro, Software Developer based in Colombia.{" "}
          </p>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
            words="Trasforming Concepts into Seamless User Experiences"
          />

          <a href="#about">
            <MagicButton
              title="Show my Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
