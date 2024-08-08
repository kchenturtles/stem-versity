"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";


function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[56rem] bg-gray-900 px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Mission
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-10 xl:pr-20"
            >
            Science, Technology, Engineering, and Math (STEM) is the future. Innovation in STEM drives advancements in healthcare, technology, sustainability, and beyond, directly impacting the quality of life for people worldwide. Diversity in STEM is crucial to address the full range of issues that affect society today.  But statistics show that diversity remains an issue among students in STEM. How do we address this issue?
            </Typography>
          </div>
          <Image
            width={770}
            height={700}
            src="/image/react-icon.svg.png"
            alt="team work"
            className="col-span-1 h-full max-h-[2rem] md:max-h-[4rem] lg:my-0 lg:ml-auto lg:max-h-[6rem] w-auto justify-self-start"
          />
        </div>
        <div className = "container mx-auto">
        <Typography className="mb-4 mt-2" color="white" variant="h6">
              Dive In
            </Typography>
            <div className="flex flex-col gap-2 mb-32 md:mb-20 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3 hover:bg-gray-500"
                >
                <a href = "/resources">Resources</a>
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3 hover:bg-gray-500"
              >
              <a href = "/about">About</a>
              </Button>
            </div>
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3">
            When Research meets Action
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500 lg:w-5/12"
          >
            This project aims to combine research with strategies to address issues regarding lack of diversity in STEM. Academic statistics and information in combination with actionable steps help empower individuals, educators, and leaders alike to work towards a more inclusive future for STEM fields.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
