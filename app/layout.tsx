//External Lib

//Internal Lib
import { AppProvider } from '@context/context';
//Styles
import "../styles/globals.scss"

import React from 'react';

import { Comfortaa } from 'next/font/google'

const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: "swap"
})

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={comfortaa.className}>
      <body>
        <main >
          <div className="wrapper">
            <AppProvider>
              {children}
            </AppProvider>
          </div>
        </main>
      </body>
    </html>
  );
}

