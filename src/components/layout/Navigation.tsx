import { useEffect, useState } from "react";
import Link from "next/link";

interface NavigationProps {
  mobile?: boolean;
}

const navItems = [
  { name: "الرئيسية", href: "#" },
  { name: "المميزات", href: "#features" },
  { name: "الأمان", href: "#security" },
  { name: "المصدر المفتوح", href: "#opensource" },
  { name: "التحميل", href: "#download" },
];

export default function Navigation({ mobile = false }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={
        mobile ? "flex flex-col space-y-4" : "flex space-x-8 space-x-reverse"
      }
    >
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`${
            activeSection === item.href.replace("#", "")
              ? "text-primary-600 dark:text-primary-400"
              : "text-gray-600 dark:text-gray-300"
          } hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm font-medium`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
