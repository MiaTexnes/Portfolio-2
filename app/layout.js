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
      <body className="min-h-screen bg-[#F3D6DC] font-sans text-[#264653] antialiased dark:bg-[#264653] dark:text-white">
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
          className="absolute left-4 top-0 -translate-y-full bg-[#264653] px-4 py-2 text-white focus:translate-y-4 dark:bg-[#F3D6DC] dark:text-[#264653]"
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
