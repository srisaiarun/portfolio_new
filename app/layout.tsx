import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Sai Arun — AI & Software Engineer",
  description:
    "Sri Sai Arun is an Artificial Intelligence and Data Science student at KLH Deemed to be University, specializing in Computer Vision, AI, software engineering, and full-stack development.",
  openGraph: {
    title: "Sri Sai Arun — AI & Software Engineer",
    description:
      "Sri Sai Arun is an Artificial Intelligence and Data Science student at KLH Deemed to be University, specializing in Computer Vision, AI, software engineering, and full-stack development.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
