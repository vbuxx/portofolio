import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/Layout";
import AboutTabs from "../components/about/AboutTabs";

export default function About() {
  return (
    <Layout title="About - Andhika Pramana Putra">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="flex flex-col w-full py-8">
          <div className="relative w-40 h-40 mx-auto md:ml-0 md:mr-auto">
            <Image
              src="/andhikapramanaputra.webp"
              layout="fill"
              className="drop-shadow-lg"
              alt="Andhika Pramana Putra - Profile"
            />
          </div>
          <div className="flex flex-col mt-4">
            <span className="text-center md:text-left text-lg font-bold">
              Andhika Pramana Putra
            </span>
            <div className="flex justify-center md:justify-start items-center">
              <div className="w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4b5563"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="drop-shadow-xl font-medium text-base text-gray-600">
                Jombang, East Java
              </p>
            </div>
          </div>
        </div>
        <AboutTabs />
      </div>
    </Layout>
  );
}
