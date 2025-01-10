import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  preload: true,
});
export const metadata: Metadata = {
  title: "Password Manager - مدير كلمات المرور الآمن",
  description: "تطبيق مفتوح المصدر لإدارة كلمات المرور بشكل آمن وسهل",
  keywords: ["password manager", "security", "encryption", "open source"],
  authors: [{ name: "اسم المطور" }],
  openGraph: {
    title: "Password Manager - مدير كلمات المرور الآمن",
    description: "تطبيق مفتوح المصدر لإدارة كلمات المرور بشكل آمن وسهل",
    type: "website",
    locale: "ar",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={ibmPlexSansArabic.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
