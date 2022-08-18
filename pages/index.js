import Layout from "../components/layouts/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout
      title="Andhika Pramana Putra - Personal Website"
      heightScreen="h-screen"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full">
        <div className="flex flex-col my-auto">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 my-auto md:leading-10">
              <p className="font-medium text-2xl w-full leading-loose">
                Hola👋 I&apos;m Andhika <br />
                <span className="font-bold text-6xl drop-shadow-xl">
                  I&apos;m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-pink-400">
                    a Web Developer
                  </span>{" "}
                  based in <span className="">Indonesia </span>
                </span>
              </p>
            </div>
            <div className="flex w-1/2 my-auto">
              <img
                src="/andhikapramana.webp"
                alt="Andhika Pramana - Profile"
                className="rounded-xl drop-shadow-xl m-8 md:m-0 ml-0 md:ml-auto w-full md:w-3/4 "
              />
            </div>
          </div>
          <div>
            <button className="bg-slate-700 text-white px-4 rounded-2xl py-2 shadow-lg transition-all delay-200 ease-in-out duration-500 hover:shadow-2xl hover:opacity-50">
              <a href="https://www.showwcase.com/andhikapramana">My Resume ↗</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
