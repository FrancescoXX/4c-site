import Head from "next/head";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Join from "../components/Join";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>4C</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <About />
      <Join />
    </div>
  );
}
