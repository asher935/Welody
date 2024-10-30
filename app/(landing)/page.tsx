import Navbar from "../components/navbar/navbar";
import Hero from "./components/hero";
import Pricing from "./components/pricing";
import About from "./components/about";
import Footer from "./components/footer";
import { Metadata } from 'next';

import { headers } from 'next/headers'

import { auth } from "@/auth"
import SessionProvider from "./components/SessionProvider";

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  const headersList = await headers()
  var nonce = headersList.get('x-nonce')

  if (!nonce) {
    nonce = "temp string"
  }

  const session = await auth();
  return (
    <main>
      <SessionProvider session={session}>
        <Navbar />
      </SessionProvider>
      <section className="pt-14">
        <Hero />
        <About nonce={nonce} />
        <Pricing />
        <Footer />
      </section>
    </main>
  );
}
