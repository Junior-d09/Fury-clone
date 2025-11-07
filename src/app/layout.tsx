
import './globals.css'
import { Arima } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const arima = Arima({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-arima',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={arima.variable}>
      <body className="font-[var(--font-arima)]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



// // app/layout.tsx (ici)
// import './globals.css'
// import { Arima } from 'next/font/google'

// const arima = Arima({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'], // tu peux adapter les poids
//   variable: '--font-arima',
//   display: 'swap',
// })

// export const metadata = {
//   title: 'Mon site',
//   description: 'Site stylé avec la police Arima',
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="fr" className={arima.variable}>
//       <body style={{ fontFamily: 'var(--font-arima), sans-serif' }}>
//         {children}
//       </body>
//     </html>
//   )
// }
