import type { Metadata } from "next";
import { Alegreya_Sans, Inter, Mulish } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
// import { ModeToggle } from "@/components/ui/mode-toggle";

export const metadata: Metadata = {
  title: "NU Shampoing",
  description: "Shampoing solide à base de levure de bi",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  console.log("Root");
  return (
    <html lang="en">
      <body className={` ${inter.className} `}>
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
