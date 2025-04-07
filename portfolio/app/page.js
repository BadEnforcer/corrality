'use client'
import About from "@/components/About";
import Footer from "@/components/Footer";
// import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Members from "@/components/Members";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Service />
  
    <Members/>
    <Footer/>
    </>
    
  );
}
