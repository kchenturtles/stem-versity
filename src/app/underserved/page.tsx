"use client";

import styles from "./styles.module.css";
import { Typography, Button, Card } from "@material-tailwind/react";
import Image from "next/image";

export const metadata = {
  title: "Underserved Students in STEM",
};

const FAQS = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply [Provide a brief overview of the initial steps or link to a detailed guide].",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30 days free trial so you can experience our mobile application with no commitment.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    desc: "Absolutely, you can cancel your subscription at any time with no questions asked. Your subscription will remain active until the end of the current billing cycle.",
  },
  {
    title: "How can I upgrade my account to paid?",
    desc: "To upgrade your account, log in and navigate to the [Upgrade Account] section in your dashboard. Follow the prompts to select your preferred plan.",
  },
  {
    title: "What if I need help or have technical issues?",
    desc: "Our dedicated support team is here to assist you. Reach out via [mention preferred support channels, e.g., live chat, email, or phone], and we'll get back to you promptly.",
  },
];

export default function Underserved () {
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
  <div className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}