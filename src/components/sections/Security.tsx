"use client";

import { ShieldCheck, Lock, Code2 } from "lucide-react";

export default function Security() {
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">أمان لا يقبل المساومة</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            نستخدم أحدث تقنيات التشفير وأفضل ممارسات الأمان لحماية بياناتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <Lock className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">تشفير من طرف إلى طرف</h3>
            <p className="text-gray-600 dark:text-gray-300">
              بياناتك مشفرة بالكامل قبل مغادرة جهازك، مما يضمن عدم إمكانية
              الوصول إليها من قبل أي شخص.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <Code2 className="w-10 h-10 text-primary-600 mb-4" />
            <h3 className="text-xl font-bold mb-4">مفتوح المصدر</h3>
            <p className="text-gray-600 dark:text-gray-300">
              الكود مفتوح المصدر بشكل كامل مما يجعل التطبيق شفافاً وقابل للتدقيق
              من قبل المجتمع.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl text-center max-w-3xl mx-auto mt-16">
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
