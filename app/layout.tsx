//External Lib

//Internal Lib
import { AppProvider } from '@context/context';
//Styles
import "../styles/globals.scss"

import React from 'react';

import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({ 
  subsets: ['latin'],
  fallback: ['Montserrat', 'sans-serif'],
  variable:'--font-montserrat',
  display:"swap"

})

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
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

