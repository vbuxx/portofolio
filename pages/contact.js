import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layouts/Layout";
import styles from "../styles/Home.module.css";

export default function Contact() {
  return (
    <Layout title="Contact - Andhika Pramana Putra">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="md:max-w-lg mx-auto text-center mb-20 pt-8">
          <h2 className="mb-4 font-heading font-semibold text-black text-6xl sm:text-7xl">
            Contact Me
          </h2>
          <p className="text-lg text-gray-600">
            Have any questions? Send me a message and i'll respond as soon as
            possible
          </p>
        </div>
        <form className="rounded-lg shadow-2xl flex flex-col px-8 py-8 bg-white mb-8">
          <h1 className="text-2xl font-bold ">Send a message</h1>

          <label htmlFor="fullname" className="text-gray-500 font-light mt-8 ">
            Full name<span className="text-red-500 ">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label htmlFor="email" className="text-gray-500 font-light mt-4 ">
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label htmlFor="subject" className="text-gray-500 font-light mt-4">
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label htmlFor="message" className="text-gray-500 font-light mt-4">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          <div className="flex flex-row items-center justify-start">
            <button className="px-10 mt-8 py-2 bg-slate-700 text-gray-50 font-light rounded-2xl text-lg flex flex-row items-center hover:opacity-70">
              Send
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-gray-300 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
