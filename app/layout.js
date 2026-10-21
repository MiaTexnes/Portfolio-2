import { Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Mia Texnes",
  description:
    "Portfolio 2, the last Frontend Development assignment, with three course projects.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sourceSans.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#f5f5f7] font-sans text-[#1c1c1f] antialiased dark:bg-[#0e1014] dark:text-white">
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function () {
            try {
              if (localStorage.getItem("theme") === "dark") {
                document.documentElement.classList.add("dark");
              }
              if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.remove("dark");
  }
} catch (e) {}
          })();`}
        </Script>
        <a
          href="#main"
          className="absolute left-4 top-0 -translate-y-full rounded-full bg-[#18181b] px-4 py-2 text-white focus:translate-y-4 dark:bg-[#9d174d]"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <a
          href="#top"
          className="fixed bottom-5 right-5 z-50 rounded-full bg-[#18181b] px-4 py-3 text-sm text-white no-underline shadow-sm dark:bg-[#9d174d]"
        >
          Back to top
        </a>
      </body>
    </html>
  );
}
