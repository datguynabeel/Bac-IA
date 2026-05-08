import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "SIRAJ — Design System Showcase",
  description:
    "Showcase du Design System SIRAJ v1.0 — IA pédagogique du Bac marocain. Glassmorphism iOS dark, palette dorée, animations spring.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
