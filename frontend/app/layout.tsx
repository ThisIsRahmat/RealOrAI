import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real or AI ',
  description: 'A fun ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className="{bricolagegrotesque.className}  ">    

<main className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-5"> <Header/>{children}<Footer/></main></body>
  </html>
  )
}
