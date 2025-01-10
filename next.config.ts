/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // سيتجاهل فحص ESLint أثناء البناء
    ignoreDuringBuilds: true,
  },
  // إضافة المزيد من الإعدادات حسب الحاجة
};

export default nextConfig;
