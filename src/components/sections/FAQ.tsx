"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, MinusIcon } from "lucide-react";

const faqs = [
  {
    question: "كيف يتم تشفير بياناتي؟",
    answer:
      "نستخدم تشفير من طرف إلى طرف بمعيار AES-256 لضمان أمان بياناتك. كل البيانات يتم تشفيرها على جهازك قبل التخزين، مما يعني أنه لا يمكن لأحد الوصول إليها سوى أنت.",
  },
  {
    question: "هل التطبيق مجاني بالكامل؟",
    answer:
      "نعم، التطبيق مجاني ومفتوح المصدر بالكامل. يمكنك استخدام جميع المميزات دون أي تكلفة.",
  },
  {
    question: "ماذا لو فقدت هاتفي؟",
    answer:
      "لا تقلق! مع نظام النسخ الاحتياطي المشفر، يمكنك استعادة جميع بياناتك بأمان على جهاز جديد باستخدام كلمة المرور الرئيسية الخاصة بك.",
  },
  {
    question: "هل يمكنني مشاركة كلمات المرور مع عائلتي؟",
    answer:
      "حالياً، التطبيق مصمم للاستخدام الفردي. نعمل على إضافة ميزة المشاركة الآمنة في إصدارات مستقبلية.",
  },
  {
    question: "كيف يمكنني المساهمة في تطوير التطبيق؟",
    answer:
      "بما أن التطبيق مفتوح المصدر، يمكنك المساهمة عبر GitHub من خلال تقديم اقتراحات، الإبلاغ عن الأخطاء، أو حتى المساهمة في الكود.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">الأسئلة الشائعة</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            إجابات على الأسئلة الأكثر شيوعاً حول تطبيق Password Manager
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full bg-white dark:bg-gray-800 p-6 rounded-2xl flex items-center justify-between hover:shadow-md transition-all duration-300"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {activeIndex === index ? (
                  <MinusIcon className="w-5 h-5 text-primary-600" />
                ) : (
                  <PlusIcon className="w-5 h-5 text-primary-600" />
                )}
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white dark:bg-gray-800 px-6 py-4 rounded-b-2xl mt-1">
                      <p className="text-gray-600 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
