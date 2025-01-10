import Link from "next/link";
import { Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* About Section */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Password Manager
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
              تطبيق مفتوح المصدر لإدارة كلمات المرور بشكل آمن وسهل. نهدف إلى جعل
              الأمان الرقمي في متناول الجميع.
            </p>
            <Link
              href="https://github.com/op-3/password_manager"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Github className="w-5 h-5" />
              <span>GitHub على</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
              روابط سريعة
            </h3>
            <ul className="space-y-4">
              {[
                { href: "#features", label: "المميزات" },
                { href: "#security", label: "الأمان" },
                { href: "#opensource", label: "المصدر المفتوح" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white">
              التحميل
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://github.com/op-3/password_manager/releases/download/V1/app-release.apk"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Android تحميل لنظام
                </Link>
              </li>
              <li>
                <span className="text-gray-400">iOS قريباً على</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t dark:border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 dark:text-gray-400">
              {new Date().getFullYear()} © Password Manager. جميع الحقوق محفوظة
            </p>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              صنع بـ <Heart className="w-4 h-4 text-red-500" /> في سلطنة عمان
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
