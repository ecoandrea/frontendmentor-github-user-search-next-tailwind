import './globals.css'

import Image from 'next/image'
import { Commissioner, Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'

import ImageHeroMobile from "@/assets/images/image-hero-desktop.jpg"

const commissioner = Commissioner({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${commissioner.className} bg-gray-200}`}>
        <header className='relative'>
          <Image 
          src={ImageHeroMobile} 
          alt="imagen de la cabecera"
          />
        <Navbar />
        </header>
        
        <main className='relative container mx-auto max-w-xs  bg-white -top-20 p-4 rounded-md sm:max-w-sm'>
          {children}
          </main>
        
        </body>
    </html>
  )
}
