import React from 'react'
import Header from '../components/Header'
import Navbar from "../components/Nav"
import Footer from '../components/Footer'
function RootLayout({children}) {
  return (
    <html lang="en" >
        <body style={{margin:"0",padding:"0"}}>
            <Header/>
            <Navbar/>
            {children}
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout