"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  GithubIcon,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  LockKeyhole,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-[#0A0F1C]">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-[500px] h-[500px] bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-[80px]" />
        <div className="absolute bottom-0 -right-4 w-[500px] h-[500px] bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-[80px]" />
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#0A0F1C_2px,transparent_2px),linear-gradient(to_bottom,#0A0F1C_2px,transparent_2px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/10 to-blue-500/10 px-4 py-2 rounded-full"
            >
              <span className="flex items-center gap-1 text-primary-400 text-sm font-medium">
                <ShieldCheck className="w-4 h-4" />
                مفتوح المصدر
              </span>
              <div className="w-px h-4 bg-primary-500/20" />
              <span className="flex items-center gap-1 text-primary-400 text-sm font-medium">
                <LockKeyhole className="w-4 h-4" />
                تشفير كامل
              </span>
            </motion.div>

            {/* Main Text */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-white">احمِ كلمات مرورك</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-primary-400 to-blue-400 text-transparent bg-clip-text">
                  بكل سهولة وأمان
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-400 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                مدير كلمات مرور مفتوح المصدر، يوفر لك الحماية القصوى مع واجهة
                سهلة الاستخدام ونظام نسخ احتياطي مشفر بالكامل.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-500 to-blue-500 hover:from-primary-600 hover:to-blue-600 text-white shadow-xl shadow-primary-500/25 hover:shadow-primary-500/35 transition-all duration-300"
                href="https://github.com/op-3/password_manager/releases/download/V1/app-release.apk"
              >
                <GithubIcon className="w-5 h-5" />
                تحميل للأندرويد
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 text-white border-white/10 hover:bg-white/10 backdrop-blur-sm"
                disabled
              >
                <Smartphone className="w-5 h-5" />
                قريباً على iOS
              </Button>
            </motion.div>
          </div>

          {/* App Preview */}
          <motion.div
            className="relative z-10 lg:ml-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative p-2 rounded-3xl bg-gradient-to-br from-primary-500/20 via-blue-500/20 to-primary-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-blue-500/20 to-primary-500/20 blur-2xl" />
              <div className="relative bg-[#0A0F1C]/80 p-4 rounded-2xl backdrop-blur-xl">
                <div className="aspect-[9/16] relative">
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Image
                      src="/3.png"
                      alt="Password Manager Preview"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="object-contain rounded-xl"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -right-4 top-1/4 w-8 h-8 bg-primary-500/20 rounded-full blur-sm" />
              <div className="absolute -left-4 bottom-1/4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
