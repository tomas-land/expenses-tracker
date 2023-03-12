import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import "../styles/globals.scss"
import * as React from 'react';
import { AppProvider } from '@context/context';

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <body>
        <main>
          <div className="wrapper">
            <AppProvider>
              {children}
            </AppProvider>
          </div>
        </main>
      </body>
    </html >
  )
}
