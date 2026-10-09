import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
});

export const metadata = {
  title: "Mia Texnes",
  description: "Three front-end projects for an employer.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${sourceSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#f5f5f7] font-sans text-[#1c1c1f] antialiased dark:bg-[#0e1014] dark:text-white">
        <Script id="theme-script" strategy="beforeInteractive">
          {`(function () {
            try {
              if (localStorage.getItem("theme") === "dark") {
                document.documentElement.classList.add("dark");
              }
            } catch (e) {}
          })();`}
        </Script>
        <a
          href="#main"
          className="absolute left-4 top-0 -translate-y-full rounded-full bg-[#18181b] px-4 py-2 text-white focus:translate-y-4 dark:bg-[#5b4dff]"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
