import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/utils/context"

const inter = Inter({ subsets: ["latin"] });
const roboto_serif = Roboto_Serif({ 
  subsets: ["latin"],
  display: "swap"
 })

// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })

export const metadata: Metadata = {
  title: "Lumko High School",
  description: "Created by Lumko High School",
};
//`${inter.variable} ${roboto_mono.variable}`
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
