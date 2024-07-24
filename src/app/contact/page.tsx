"use client";

import Image from "next/image";
import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
  Input,
  Textarea,  
  IconButton
} from "@material-tailwind/react";
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, TicketIcon } from "@heroicons/react/24/outline";

function Page () {
  return (
  <div>
    <header className="bg-gray-900 mb-96">
      <div className="container mx-auto px-8 h-[22rem] lg:px-48 translate-y-64">
        <Image
          width={1024}
          height={1024}
          alt="avatar"
          src="/image/logo.png"
          className="w-40 rounded-xl"
        />
        <div className="flex mt-16 justify-between">
          <Typography variant="h5" className="text-3xl">
            Kendree C
          </Typography>
          <Button color="gray"><a href = "mailto:kendree.chen@gmail.com">Connect</a></Button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">President, </Typography>
            <Typography className="!text-gray-500 font-normal">
              Greater Boston STEM Program
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">Captain, </Typography>
            <Typography className="!text-gray-500 font-normal">
              FIRST Robotics Team 246
            </Typography>
          </div>
        </div>
        <Typography variant="lead" className="!text-gray-500 mt-8">
          {"Woman in STEM; lover of learning; mentor; educator; diversity advocate; nonprofit president; avid community engager; crocheter; cat mom"}
        </Typography>
        <Button
          variant="text"
          color="gray"
          className="flex items-center gap-2 mt-2"
          onClick={() => window.open("https://www.linkedin.com/in/kendree-chen/")}
        >
          more about me
          <ArrowRightIcon
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Button>
      </div>
    </header>
    <div className="px-8 pt-20">
    <div className="container mx-auto mb-5 md:mb-20 text-center">
      <Typography variant="h2" color="blue-gray" className="mb-4">
        Thoughts? Questions?
      </Typography>
      <Typography variant="lead" className="mx-auto !text-gray-500">
        I&apos;d love to hear from you!
      </Typography>
    </div>
    </div>
    <div className="container mx-auto">
      <Card shadow={true} className="border border-gray/50">
        <CardBody className="grid grid-cols-1 md:p-10 lg:grid-cols-2 md:gap-28">
          <div className="w-full mt-2 md:mt-0 md:px-10 h-full p-5">
            <form action="#">
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="First Name"
                  name="first-name"
                  placeholder="eg. Lucas"
                  containerProps={{
                    className: "!min-w-full mb-3 md:mb-0",
                  }}
                />
                {/* @ts-ignore */}
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Last Name"
                  name="last-name"
                  placeholder="eg. Jones"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                />
              </div>
              {/* @ts-ignore */}
              <Input
                color="gray"
                size="lg"
                variant="static"
                label="Email"
                name="first-name"
                placeholder="eg. lucas@mail.com"
                containerProps={{
                  className: "!min-w-full mb-8",
                }}
              />
              {/* @ts-ignore */}
              <Textarea
                color="gray"
                size="lg"
                variant="static"
                label="Your Message"
                name="first-name"
                containerProps={{
                  className: "!min-w-full mb-10 md:mb-28",
                }}
              />
              <div className="w-full flex justify-end">
                <Button className="w-full md:w-fit" color="gray" size="md">
                  Send message
                </Button>
              </div>
            </form>
          </div>
          <div className="w-full rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
            <Typography variant="h4" color="white" className="mb-2">
              Contact Information
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto mb-8 text-base !text-gray-500"
            >
              Feel free to leave me your thoughts! I&apos;d love to hear from you.
            </Typography>
            <div className="flex items-center gap-5 mt-48">
              <IconButton variant="text" color="white">
              <a href = "https://www.linkedin.com/in/kendree-chen/"><i className="fa-brands fa-linkedin text-lg" /></a>
              </IconButton>
              <IconButton variant="text" color="white" >
              <a href = "https://www.instagram.com/kendree.c/"><i className="fa-brands fa-instagram text-lg" /></a>
              </IconButton>
              <IconButton variant="text" color="white" >
                <a href = "github.com/kchenturtles"><i className="fa-brands fa-github text-lg" /></a>
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
</div>
  );
}
export default Page;
