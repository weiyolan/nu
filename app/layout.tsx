import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange> */}
      {children}
      {/* </ThemeProvider> */}
    </ClerkProvider>
  );
}

//    // appearance={{
//   layout: {
//     termsPageUrl: "https://clerk.com/terms",
//   },
// }}
