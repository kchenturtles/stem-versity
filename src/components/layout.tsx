"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Footer from "./footer";
import Navbar from "./navbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return <ThemeProvider><Navbar />{children}<Footer/></ThemeProvider>;
}

export default Layout;
