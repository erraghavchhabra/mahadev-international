import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WowInit from "@/components/WowInit";
import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${instrumentSans.variable} font-sans`}>
      {/* WOW JS INITIALIZER */}
      <WowInit />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}