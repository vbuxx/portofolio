import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/Layout";
import AboutTabs from "../components/about/AboutTabs";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  const customMeta = {
    title: "About - Andhika Pramana Putra",
    // Add any other custom properties you want to override or add
  };
  return (
    <Layout customMeta={customMeta}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="flex flex-col w-full py-8">
          <div
            className="relative w-40 h-40 mx-auto md:ml-0 md:mr-auto"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in">
            <Image
              src="/andhikapramanaputra.webp"
              layout="fill"
              className="drop-shadow-lg"
              alt="Andhika Pramana Putra - Profile"
            />
          </div>
          <div
            className="flex flex-col mt-4"
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-easing="ease-in">
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
                  className="dark:fill-gray-300">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="drop-shadow-xl font-medium text-base text-gray-600 dark:text-gray-300">
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
