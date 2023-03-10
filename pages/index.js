import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Frontend/Navbar";
import Hero from "../components/Frontend/Hero";
import Education from "../components/Frontend/Education";
import Skills from "../components/Frontend/Skills";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="">
        <Hero />
        <Education />
        <Skills />
      </main>
    </>
  );
}
