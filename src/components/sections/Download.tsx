"use client";

import { motion } from "framer-motion";
import {
  GithubIcon,
  Smartphone,
  ArrowLeft,
  Shield,
  Lock,
  Download as DownloadIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Download() {
  return (
    <section id="download" className="py-32 relative overflow-hidden">
      {/* خلفية متدرجة محسنة */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950" />

      {/* عناصر زخرفية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <DownloadIcon className="w-16 h-16 mx-auto mb-6 text-primary-600 dark:text-primary-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            ابدأ في حماية كلمات مرورك اليوم
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">حمل التطبيق الآن</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                انضم إلى آلاف المستخدمين الذين يثقون بنا في حماية كلمات مرورهم
              </p>

              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  href="https://github.com/op-3/password_manager/releases/download/V1/app-release.apk"
                >
                  <GithubIcon className="w-5 h-5" />
                  تحميل للأندرويد
                  <ArrowLeft className="w-4 h-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full flex items-center justify-center gap-3 border-2"
                  disabled
                >
                  <Smartphone className="w-5 h-5" />
                  قريباً على iOS
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-primary-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">مجاني ومفتوح المصدر</span>
                </div>
                <div className="flex items-center gap-3 bg-primary-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <Lock className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">آمن بالكامل</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src="/2.png"
                alt="Password Manager App"
                width={500}
                height={700}
                className="rounded-3xl shadow-2xl"
              />
              {/* إضافة توهج حول الصورة */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-blue-500/20 blur-2xl rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
