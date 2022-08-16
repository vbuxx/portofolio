import Layout from "../components/layouts/Layout";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Container from "../components/Container";

export default function Home() {
  return (
    <Layout title="Andhika Pramana Putra - Personal Website">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="flex py-20 h-auto">
          <div className="w-1/2 my-auto leading-10">
            <p className="font-medium text-2xl">Hola👋 I&apos;m Andhika</p>
            <div className="font-bold text-6xl drop-shadow-xl">
              I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-pink-400">
                a Web Developer
              </span>{" "}
              based in <span className="">Indonesia </span>
            </div>
            <div>
              <button className="bg-slate-700 text-white px-4 rounded-xl mt-8 shadow-lg transition-all delay-200 ease-in-out duration-500 hover:shadow-2xl hover:opacity-50">
                <a href="https://www.showwcase.com/andhikapramana">
                  My Resume ↗
                </a>
              </button>
            </div>
          </div>
          <div className="flex w-1/2 my-auto">
            <img
              src="/andhikapramana.webp"
              alt="Andhika Pramana - Profile"
              className="rounded-xl drop-shadow-xl mb-4 md:mb-0 ml-auto w-[300px] h-[300px] "
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
