/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Inter, Nunito_Sans } from 'next/font/google'
import TanstackProvider from "@/utils/tanstack-provider";
import { Toaster as Sonner } from "sonner";

// const nunitoSans = Nunito_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['400', '500', '600', '700'],
// })

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  // Anda bisa menambahkan weight yang dibutuhkan
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.className}>
      <body
        className={`antialiased`}
      >
        <TanstackProvider>
          {children}
          <Sonner richColors position="top-center"/>
        </TanstackProvider>
      </body>
    </html>
  );
}
