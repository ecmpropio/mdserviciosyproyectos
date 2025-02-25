import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";

const fontRoboto = Roboto({
  weight:['100','300','400', '500','700'],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "MD Servicios y Proyectos",
  description: "La página web de MD Servicios y Proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontRoboto.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
