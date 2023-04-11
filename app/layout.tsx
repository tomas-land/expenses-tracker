//External Lib
import { Analytics } from '@vercel/analytics/react';
//Internal Lib
import { AppProvider } from '@context/context';
//Styles
import "../styles/globals.scss"

export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <body>
        <main>
          <div className="wrapper">
            <AppProvider>
              {children}
            </AppProvider>
            <Analytics />
          </div>
        </main>
      </body>
    </html >
  )
}
