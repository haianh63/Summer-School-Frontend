import '../globals.css'
import Header from '../_components/Layout/Header'
import Footer from '../_components/Layout/Footer'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
