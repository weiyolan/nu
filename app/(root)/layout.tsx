import type { Metadata } from "next";
import { Alegreya_Sans, Inter, Mulish } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NU Shampoing",
  description: "Shampoing solide à base de levure de bi",
};

const alegreya = Alegreya_Sans({ subsets: ["latin"], weight: ["300", "400", "700"] });

const mulish = Mulish({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("Root");

  return (
    <html lang="en">
      <body className={` ${alegreya.className} `}>
        {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
        {/* <Navbar /> */}
        {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}

//    // appearance={{
//   layout: {
//     termsPageUrl: "https://clerk.com/terms",
//   },
// }}
