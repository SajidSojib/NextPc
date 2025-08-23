"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
export default function NavbarWrapper() {
    AOS.init();
  return (
    <SessionProvider>
      <Navbar />
    </SessionProvider>
  );
}
