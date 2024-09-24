import Link from "next/link";
import Container from "../Container";
import { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    // Get the current year using the Date object
    const year = new Date().getFullYear();
    setCurrentYear(year.toString());
  }, []);
  return (
    <div className="mt-auto ">
      <footer
        className="flex flex-col-reverse md:flex-row items-center justify-between font-medium pb-12 pt-8 md:pt-12 md:pb-8 gap-4 
        ">
        <h3 className="">© {currentYear}</h3>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/vbuxx">
            <img
              src="/github.svg"
              alt=""
              className="w-8 hover:opacity-75 dark:bg-slate-300 dark:rounded-md"
            />
          </a>
          <a href="https://www.instagram.com/flavoocx/">
            <img
              src="/instagram.svg"
              alt=""
              className="w-8 hover:opacity-75 dark:bg-slate-300 dark:rounded-md"
            />
          </a>
          <a href="https://www.linkedin.com/in/andhikapramana/">
            <img
              src="/linkedin.svg"
              alt=""
              className="w-8 hover:opacity-75 dark:bg-slate-300 dark:rounded-md"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
