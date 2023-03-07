import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import "../styles/globals.scss"

import * as React from 'react';
import { AppProvider } from '@context/context';
import { SWRConfig } from 'swr';
import { getExpensesWithCategory } from '@lib/prisma/expenses';
import { iExpense } from '@lib/interfaces';
import useSWR from 'swr'

// const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({children,}: {children: any}) {
  return (
    <html>
      <body>
        {/* <head/> */}
        <main>
            <AppProvider>
              {children}
            </AppProvider>
        </main>
      </body>
    </html>
  )
}
