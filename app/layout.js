import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavbarWrapper from "@/components/NavbarWrapper";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextPC",
  description: "Your trusted computer shop since 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="relative">
          <NavbarWrapper></NavbarWrapper>
        </nav>
        <main className="min-h-[calc(100vh-314px)]">{children}</main>
        <footer className="bg-gray-800">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
