import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Dropdown = ({ links }) => {
  const router = useRouter();
  const onPage = links.filter((link) => link.href == router.asPath);
  return (
    <div className="p-10">
      <div className="group inline-block relative">
        <div className="bg-gradient-to-r from-indigo-700 p-1 rounded-xl to-pink-400">
          <button className="font-semibold bg-white dark:bg-slate-800 py-2 px-4 rounded-lg drop shadow-xl inline-flex items-center">
            {/* <span className="mr-1">{onPage[0].page}</span> */}
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
        </div>
        <ul className="group-hover:block absolute hidden text-gray-700 pt-1">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <Link href={link.href}>
                  <button className="rounded-t bg-white dark:bg-slate-800 hover:bg-gray-400 dark:hover:bg-slate-600 dark:text-white py-2 text-center w-32 block whitespace-no-wrap drop-shadow-lg">
                    {link.page}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
