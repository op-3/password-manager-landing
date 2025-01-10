import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: string, delay: number = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
};

export const fadeIn = (element: string, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
    },
  });
};

export const staggerChildren = (parent: string, children: string) => {
  gsap.from(children, {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: {
      trigger: parent,
      start: "top 70%",
    },
  });
};

export const heroAnimation = () => {
  const tl = gsap.timeline();

  tl.from(".hero-title", {
    opacity: 0,
    y: 100,
    duration: 1,
  })
    .from(
      ".hero-subtitle",
      {
        opacity: 0,
        y: 50,
        duration: 0.8,
      },
      "-=0.5"
    )
    .from(
      ".hero-cta",
      {
        opacity: 0,
        y: 30,
        duration: 0.5,
      },
      "-=0.3"
    );

  return tl;
};

export const parallaxEffect = (element: string, speed: number = 0.5) => {
  gsap.to(element, {
    yPercent: 100 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};
