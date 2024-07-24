"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = [{name:"Home", link:"#"}, {name:"Resources", link:"/resources"}, {name:"Blog", link:"/blog"}, {name:"Contact", link:"/contact"}];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="https://www.material-tailwind.com"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
            >
              STEMquity
            </Typography>
            <Typography color="white" className="mb-12 font-normal">
              Let&apos;s build our future.
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link.name}>
                  <Typography
                    as="a"
                    href={link.link}
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link.name}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography variant="h6" color="white" className="mb-3">
              Contact Me
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center hover:bg-gray-500"
              >
              <a href = "/contact">
                About
              </a>
              </Button>
              <Button
                color="white"
                className="flex items-center justify-center hover:bg-gray-500"
              >
               <a href = "https://github.com/kchenturtles/stem-versity">
                View Code
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} {" "}
            by{" "}
            <a href="github.com/kchenturtles" target="_blank">
              Kendree Chen
            </a>
            .
          </Typography>

          <div className="flex gap-2">
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
      </div>
    </footer>
  );
}

export default Footer;
