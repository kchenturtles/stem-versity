import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "gray" : "white"}
      className={`fixed top-0 z-50 border-0 ${isScrolling? "bg-white": "bg-black"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="/"
          target="_blank"
          variant="h6"
          color={isScrolling ? "gray" : "white"}
        >
          Discussions on STEM Diversity 
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <NavItem href = "/">Home</NavItem>
          <NavItem href = "/resources">Resources</NavItem>
          <NavItem href = "/blog">Blog</NavItem>
          <NavItem href = "/contact">About</NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
        <IconButton variant="text" color={isScrolling ? "gray" : "white"} size = "sm">
        <a href = "https://www.linkedin.com/in/kendree-chen/"><i className="fa-brands fa-linkedin text-lg" /></a>
        </IconButton>
        <IconButton variant="text" color={isScrolling ? "gray" : "white"} size = "sm">
        <a href = "https://www.instagram.com/kendree.c/"><i className="fa-brands fa-instagram text-lg" /></a>
        </IconButton>
        <IconButton variant="text" color={isScrolling ? "gray" : "white"} size = "sm">
          <a href = "github.com/kchenturtles"><i className="fa-brands fa-github text-lg" /></a>
        </IconButton>
          <a href="https://github.com/kchenturtles/stem-versity" target="_blank">
            <Button color={isScrolling ? "gray" : "white"} size="sm" className = "hover:bg-gray-500">
              View This Site's Code!
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem>Home</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem href="https://www.material-tailwind.com/docs/react/installation">
              Docs
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
          <IconButton variant="text" color="white">
          <a href = "https://www.linkedin.com/in/kendree-chen/"><i className="fa-brands fa-linkedin text-lg" /></a>
          </IconButton>
          <IconButton variant="text" color="white" >
          <a href = "https://www.instagram.com/kendree.c/"><i className="fa-brands fa-instagram text-lg" /></a>
          </IconButton>
          <IconButton variant="text" color="white" >
            <a href = "github.com/kchenturtles"><i className="fa-brands fa-github text-lg" /></a>
          </IconButton>
            <a href="https://github.com/kchenturtles/stem-versity" target="_blank">
              <Button color="gray" size="sm" className="ml-auto hover:bg-gray-500">
                View This Site's Code!
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
