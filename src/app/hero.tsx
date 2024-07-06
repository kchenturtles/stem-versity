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
            <Typography className="mb-4 mt-12" color="white" variant="h6">
              Dive In
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                Resources
              </Button>
              <Button
                size="lg"
                color="white"
                className="flex justify-center items-center gap-3"
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  alt="metamask"
                  className="w-6 h-6"
                />
                About
              </Button>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
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
            This project aims to combine research with action to address issues regarding lack of diversity in STEM. Academic statistics and information in combination with actionable steps help empower individuals and policymakers to advocate for influential steps towards inclusive STEM education and workforce practices.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
