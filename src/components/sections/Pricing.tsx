"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">مجاني ومفتوح المصدر</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              نؤمن بأن الأمان حق للجميع، لذلك نقدم التطبيق مجاناً وبشكل مفتوح
              المصدر
            </p>
          </motion.div>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-8 text-center border-b dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4">نسخة مجانية بالكامل</h3>
              <div className="text-4xl font-bold text-primary-600 mb-4">
                $0
                <span className="text-base font-normal text-gray-600 dark:text-gray-400">
                  /للأبد
                </span>
              </div>
            </div>

            <div className="p-8">
              <ul className="space-y-4">
                {[
                  "تخزين غير محدود لكلمات المرور",
                  "نسخ احتياطي مشفر",
                  "مولد كلمات مرور قوية",
                  "تشفير من طرف إلى طرف",
                  "دعم المصادقة الثنائية",
                  "مزامنة بين الأجهزة",
                  "تحديثات مستمرة",
                  "دعم المجتمع",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full mt-8"
                href="[رابط التحميل المباشر]"
              >
                حمل التطبيق مجاناً
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
