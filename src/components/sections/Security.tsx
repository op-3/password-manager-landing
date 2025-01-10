"use client";

import { useEffect } from "react";
import { ShieldCheck, Lock, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const securityFeatures = [
  {
    icon: Lock,
    title: "تشفير من طرف إلى طرف",
    description:
      "بياناتك مشفرة بالكامل قبل مغادرة جهازك، مما يضمن عدم إمكانية الوصول إليها من قبل أي شخص.",
  },
  {
    icon: Code2,
    title: "مفتوح المصدر",
    description:
      "الكود مفتوح المصدر بشكل كامل مما يجعل التطبيق شفافاً وقابل للتدقيق من قبل المجتمع.",
  },
];

export default function Security() {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">أمان لا يقبل المساومة</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نستخدم أحدث تقنيات التشفير وأفضل ممارسات الأمان لحماية بياناتك
          </p>
        </div>

        {/* المميزات الأمنية */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            >
              <feature.icon className="w-10 h-10 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* قسم الشفافية */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center max-w-3xl mx-auto">
          <ShieldCheck className="w-12 h-12 text-primary-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">شفافية كاملة</h3>
          <p className="text-gray-600 dark:text-gray-300">
            كوننا مفتوحي المصدر يعني أن الجميع يمكنه التحقق من أمان التطبيق
            وكيفية عمله. نؤمن بأن الأمان الحقيقي يأتي من الشفافية الكاملة.
          </p>
        </div>
      </div>
    </section>
  );
}
