import "./globals.css";
import type { Metadata } from "next";
import { Alfa_Slab_One, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

// ✅ Define both fonts with `variable`
const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  weight: "400", // Alfa Slab One only supports 400
  variable: "--font-alfa",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Mahmoud Harmouch | English Teacher",
  description:
    "Professional portfolio of Mahmoud Harmouch, English teacher trainee with 2 years of internship experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${alfaSlabOne.variable} ${playfair.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
