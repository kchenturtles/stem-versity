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
import BlogPostCard from "@/components/blog-post-card";

const BLOG_POSTS = [
  {
    img: "/image/blogs/blog-1.png",
    tag: "minority",
    title: "Hydrogen-Powered Vehicles",
    desc: "This article delves into the cutting-edge technology behind hydrogen fuel cells and their environmental benefits.",
    author: { name: "Emma Roberts", img: "/image/avatar1.jpg"},
    date: "July 15, 2021"
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "Mental Health in the Digital Age",
    tag: "minority",
    desc: "This article explores the intricate relationship between social media usage and mental health",
    author: { name: "Emma Roberts", img: "/image/avatar1.jpg"},
    date: "July 15, 2021"
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Mars Colonization and Beyond",
    tag: "minority",
    desc: "This article takes readers on a journey through the latest developments in space exploration.",
    author: { name: "Emma Roberts", img: "/image/avatar1.jpg"},
    date: "July 15, 2021"
  },
];

function Contact() {
  return (
    <container>
    <header className="bg-gray-900 mb-96">
      <div className="container mx-auto px-8 h-[22rem] lg:px-48 translate-y-64">
        <Image
          width={1024}
          height={1024}
          alt="avatar"
          src="/image/avatar1.jpg"
          className="w-40 rounded-xl"
        />
        <div className="flex mt-16 justify-between">
          <Typography variant="h5" className="text-3xl">
            Emma Roberts
          </Typography>
          <Button color="gray">follow</Button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">323</Typography>
            <Typography className="!text-gray-500 font-normal">
              Posts
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">3.5k</Typography>
            <Typography className="!text-gray-500 font-normal">
              Followers
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">260</Typography>
            <Typography className="!text-gray-500 font-normal">
              Following
            </Typography>
          </div>
        </div>
        <Typography variant="lead" className="!text-gray-500 mt-8">
          A wordsmith who believes in the power of language to shape our world,
          inspire change, and connect us all. I bring a unique perspective to
          the writing, blending the knowledge and experiences into
          thought-provoking narratives.
        </Typography>
        <Button
          variant="text"
          color="gray"
          className="flex items-center gap-2 mt-2"
        >
          more about me
          <ArrowRightIcon
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Button>
      </div>
    </header>
    <section className="py-40 px-8">
      <div className="container mx-auto mb-12">
        <Typography variant="h3" color="blue-gray">
          Check my latest blog posts
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {BLOG_POSTS.map((props, idx) => (
          <BlogPostCard key={idx} {...props} />
        ))}
        <Card
          className="relative grid h-full w-full place-items-center overflow-hidden
            bg-black"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography variant="h3" className="mt-4" color="white">
              Discover all my articles
            </Typography>
            <Typography color="white" className="py-4 font-normal">
              I am a versatile writer who explores a wide range of genres and
              topics.
            </Typography>
            <Button
              variant="text"
              color="white"
              className="flex items-center gap-2"
            >
              read more
              <ArrowRightIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-white"
              />
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
    <section className="px-8 pt-20">
    <div className="container mx-auto mb-5 md:mb-20 text-center">
      <Typography variant="h1" color="blue-gray" className="mb-4">
        Say Hi!
      </Typography>
      <Typography variant="lead" className="mx-auto !text-gray-500">
        Any questions or remarks? Just write us a messaage!
      </Typography>
    </div>
    <div className="container mx-auto">
      <Card shadow={true} className="border border-gray/50">
        <CardBody className="grid grid-cols-1 md:p-10 lg:grid-cols-2 md:gap-28">
          <div className="w-full mt-8 md:mt-0 md:px-10 h-full p-5">
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
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>
            <div className="flex gap-5">
              <PhoneIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                +1(424) 535 3523
              </Typography>
            </div>
            <div className="flex my-2 gap-5">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                hello@mail.com
              </Typography>
            </div>
            <div className="flex mb-10 gap-5">
              <TicketIcon className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                Open Support Ticket
              </Typography>
            </div>
            <div className="flex items-center gap-5">
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-facebook text-lg" />
              </IconButton>
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-instagram text-lg" />
              </IconButton>
              <IconButton variant="text" color="white">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  </section>
</container>
  );
}
export default Contact;
