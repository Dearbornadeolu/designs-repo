import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Designs & Developer Haven",
  description: "A collection of design and development resources",
  keywords: "design, development, resources, web design, UI/UX",
  authors: [{ name: "Dearborn Adeyeni", url: "https://x.com/DearbornAdeyeni" }],
  creator: "Dearborn Adeyeni",
  openGraph: {
    title: "Designs & Developer Haven",
    description: "A collection of design and development resources",
    url: "https://designs-repo.vercel.app",
    siteName: "Designs & Developer Haven",    
    images: [
      {
        url: "https://designs-repo.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Designs & Developer Haven",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
