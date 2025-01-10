"use client";

import { useEffect } from "react";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Security from "@/components/sections/Security";
import OpenSource from "@/components/sections/OpenSource";
import Download from "@/components/sections/Download";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // انيميشن للعناوين الرئيسية
    gsap.utils.toArray<HTMLElement>("h1, h2").forEach((heading) => {
      gsap.fromTo(
        heading,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: heading,
            start: "top 80%",
          },
        }
      );
    });

    // انيميشن للكروت والعناصر
    gsap.utils.toArray<HTMLElement>(".animate-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Security />
        <OpenSource />
        <Download />
      </main>
      <Footer />
    </>
  );
}
