import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import "../styles/globals.scss"

import * as React from 'react';
import { AppProvider } from '@context/context';

// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
       {/* <head/> */}
        <main>
          <AppProvider>
            {/* @ts-ignore */}
            {children}
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
