import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    AOS.init();

    // Function to update the window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate the appropriate image width based on the window width
  let imageWidth;
  if (windowWidth >= 1024) {
    // Desktop: 375px
    imageWidth = 375;
  } else if (windowWidth >= 768) {
    // Medium screen: 230px
    imageWidth = 250;
  } else {
    // Mobile: 190px
    imageWidth = 190;
  }

  return (
    <Layout
      title="Andhika Pramana Putra - Personal Website"
      heightScreen="h-screen">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-full">
        <div className="flex flex-col pb-20 my-auto">
          <div
            className="flex flex-col md:flex-row"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in">
            {/* <div className="md:w-1/2 lg:mt-10 lg:leading-10">
              <p className="font-medium text-xl text-center md:text-start lg:text-2xl w-full leading-loose">
                Hola👋 I&apos;m Andhika <br />
                <span className="font-bold text-5xl lg:text-6xl drop-shadow-xl">
                  I&apos;m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-pink-400">
                    a Web Developer
                  </span>{" "}
                  based in{" "}
                  <span className="">Indonesia </span>
                </span>
              </p>
            </div> */}
            <div className="md:w-1/2 lg:mt-10 lg:leading-10">
              <p className="font-medium text-xl text-center md:text-start lg:text-2xl w-full leading-loose">
                Hola👋 I'm Andhika <br />
                <span className="font-bold text-5xl lg:text-6xl drop-shadow-xl">
                  I'm{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-pink-400">
                    a Weekend Developer
                  </span>{" "}
                  based in <span className="">Indonesia </span>
                </span>
              </p>
            </div>

            <div className="flex md:w-1/2 justify-center md:justify-end lg:m-0 my-4">
              {/* <img
                src="/andhikapramana.webp"
                alt="Andhika Pramana - Profile"
                className="rounded-xl drop-shadow-xl m-8 lg:m-0 lg:ml-auto w-1/2 md:w-2/3 lg:w-3/4 "
              /> */}
              <Image
                src="/andhikapramana.webp"
                alt="Andhika Pramana - Profile"
                width={imageWidth}
                height={imageWidth}
                className="rounded-xl drop-shadow-xl m-8 lg:m-0 lg:ml-auto"
              />
            </div>
          </div>
          <div
            className="flex justify-center md:justify-start w-auto md:w-full lg:-mt-16"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in">
            <button className="bg-slate-700 text-white px-4 rounded-2xl py-2 shadow-lg transition-all delay-200 ease-in-out duration-500 hover:shadow-2xl hover:opacity-50">
              <a href="https://www.showwcase.com/andhikapramana">My Resume ↗</a>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
