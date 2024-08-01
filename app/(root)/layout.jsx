import { Poppins } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Eternal Half",
  description:
    "Find your perfect match with Eternal Half – the ultimate dating platform designed to connect you with your soulmate. Experience seamless matchmaking, genuine connections, and a community built on trust and compatibility. Join us and start your journey towards finding your eternal half today!",
    icons: {
      icon: "/favicon.ico",
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ClerkProvider>
      <body className={poppins.className}>
        {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
