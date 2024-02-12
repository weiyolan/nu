import type { Metadata } from "next";
import { Alegreya_Sans, Inter, Mulish } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NU Shampoing",
  description: "Shampoing solide à base de levure de bi",
};

// const alegreya = Alegreya_Sans({ subsets: ["latin"], weight: ["300", "400", "700"] });

const mulish = Mulish({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // console.log("Root");

  return (
    <html lang="en">
      {/* <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head> */}
      <body className={` ${mulish.className} `}>
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
