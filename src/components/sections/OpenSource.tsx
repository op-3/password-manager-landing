"use client";

import { motion } from "framer-motion";
import { GithubIcon, Code2, Users, Bug } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function OpenSource() {
  return (
    <section id="opensource" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            مفتوح المصدر بالكامل
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            نؤمن بالشفافية والأمان، لذلك جعلنا التطبيق مفتوح المصدر. يمكنك
            مراجعة الكود والمساهمة في تطويره.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Code2,
              title: "كود مفتوح",
              description: "راجع الكود المصدري وتأكد من جودته وأمانه بنفسك",
            },
            {
              icon: Users,
              title: "مجتمع نشط",
              description:
                "انضم إلى مجتمع المطورين والمساهمين في تطوير التطبيق",
            },
            {
              icon: Bug,
              title: "الإبلاغ عن الأخطاء",
              description:
                "ساعدنا في تحسين التطبيق من خلال الإبلاغ عن الأخطاء والمشاكل",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary-600" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="flex items-center gap-2 mx-auto"
            href="https://github.com/op-3/password_manager"
          >
            <GithubIcon className="w-5 h-5" />
            تصفح الكود على GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
