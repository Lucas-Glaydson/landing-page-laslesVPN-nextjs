
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";


const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "300", "900", "800", "500", "600"]
});

export const metadata: Metadata = {
  title: "LaslesVPN",
  description: "Want anything to be easy with LaslesVPN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
