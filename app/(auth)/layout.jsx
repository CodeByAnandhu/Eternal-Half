import { ClerkProvider } from "@clerk/nextjs"
import { Poppins } from "next/font/google"
import "../globals.css"


export const metadata = {
    title: "Eternal Half", 
    discription:"Find your perfect match with Eternal Half – the ultimate dating platform designed to connect you with your soulmate. Experience seamless matchmaking, genuine connections, and a community built on trust and compatibility. Join us and start your journey towards finding your eternal half today!",
    icons: {
      icon: "/favicon.ico",
    }
}

const poppins = Poppins({ 
    subsets: ["latin"],
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({ children }) {
    
    return (

    <ClerkProvider>
        <html lang="en">
          <body className={poppins.className}>
            {children}
          </body>
        </html>
    </ClerkProvider>

    )
}