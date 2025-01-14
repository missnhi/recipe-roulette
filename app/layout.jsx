import { metadata } from "./head";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Geist, Geist_Mono, Exo_2, Lexend } from "next/font/google";
// import "./globals.css";
// import { useRecipeState } from "@/hooks/useRecipeState"; // Import the custom hook

// Load the Geist Sans font for primary sans-serif text
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Load the Geist Mono font for monospace text (e.g., code or special elements)
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Load Exo 2 font for additional styling (e.g., headings or custom text)
const exo2 = Exo_2({
  variable: "--font-exo2",
  subsets: ["latin"],
  weight: ["100", "400", "900"], // Specify weights you need
});

// Load Lexend font for headings or high-contrast text
const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "400", "900"], // Specify weights you need
});

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${exo2.variable} ${lexend.variable}`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        <link rel='preconnect' href='https://unpkg.com' />
      </head>
      <body className='antialiased flex flex-col min-h-screen'>
        <Navbar />

        <main id='content' className='flex-grow'>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
