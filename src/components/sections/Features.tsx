"use client";

import { useEffect } from "react";
import { Smartphone, Lock, RefreshCw } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Smartphone,
    title: "واجهة سهلة الاستخدام",
    description: "تصميم عصري وبسيط يجعل إدارة كلمات المرور عملية ممتعة وسهلة",
  },
  {
    icon: Lock,
    title: "تشفير متقدم",
    description: "تشفير من طرف إلى طرف لضمان أمان بياناتك بأحدث معايير التشفير",
  },
  {
    icon: RefreshCw,
    title: "نسخ احتياطي مشفر",
    description: "احتفظ بنسخة احتياطية من بياناتك بشكل آمن ومشفر بالكامل",
  },
];

export default function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");

    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            مميزات تجعل حماية كلمات مرورك
            <span className="text-primary-600"> أسهل من أي وقت مضى</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            صممنا كل ميزة بعناية لنوفر لك تجربة آمنة وسهلة الاستخدام
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
