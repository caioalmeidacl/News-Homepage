import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
});

// Metadata
export const metadata: Metadata = {
  title: "News Homepage",
  description: "Challenge from FrontEnd Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
