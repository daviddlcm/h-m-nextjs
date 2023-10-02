import React from 'react'
import Header from './components/Header'
import Navbar from "./components/Nav"
import Footer from './components/Footer'
import { Oswald } from "next/font/google"
const oswald= Oswald({
  weight:["300","400"],
  subsets:["latin"]
});
function RootLayout({children}) {
  return (
    <html lang="en" >
        <body style={{margin:"0",padding:"0"}} className={oswald.className}>
            <Header/>
            <Navbar/>
            {children}
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout