import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script"; // Import Script from next/script
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Korella Ai",
  description: "Discover how AI can transform your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={cn(dmSans.className, "antialiased bg-[#fff]")}>
        {children}

        {/* JavaScript code for snow effect*/}
        <Script src="/snowEffect.js" defer>
          {`
            console.log('JavaScript code running in RootLayout');
          `}
        </Script>
      </body>
    </html>
  );
}
