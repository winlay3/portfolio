import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import MainNav from "@/components/MainNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Win's Portfolio",
  description: "Win's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
    <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning={true}>
      {/* Apply theme before hydration */}
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
        <MainNav />
        {children}
      </ThemeProvider>
    </body>
  </html>
  );
}
