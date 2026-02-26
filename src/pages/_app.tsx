import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { Instrument_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${instrumentSans.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
<Footer />
    </main>
  );
}