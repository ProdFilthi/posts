import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navlinks from "@/navbar/Navlinks";
import Wrapper from "@/container/Wrapper";
import Footer from "@/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily Posts",
  description: "This is a simple social media platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Wrapper>
          <header>
            <Navlinks />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </Wrapper>
      </body>
    </html>
  );
}
