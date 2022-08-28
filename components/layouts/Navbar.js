import Link from "next/link";
import Dropdown from "../Dropdown";

function Navbar() {
  const links = [
    {
      href: "/",
      page: "Home",
    },
    {
      href: "/about",
      page: "About",
    },
    {
      href: "/projects",
      page: "Projects",
    },
    {
      href: "/contact",
      page: "Contact",
    },
  ];
  return (
    <>
      <nav className="flex flex-col lg:flex-row items-center py-8">
        <div className="w-full lg:w-6/12">
          <Link href="/">
            <a className="flex items-center justify-center lg:justify-start">
              <div className="w-20 h-20 lg:w-10 lg:h-10 flex items-center justify-center bg-gradient-to-tr from-indigo-700 via-purple-500 to-pink-500 rounded-2xl font-extrabold text-6xl lg:text-2xl text-white">
                E
              </div>
            </a>
          </Link>
        </div>

        <div className="flex w-full lg:w-6/12">
          <div className="block lg:hidden mx-auto z-10">
            <Dropdown links={links} />
          </div>
          <div className="hidden lg:block ">
            <ul className="lg:space-x-14 flex lg:justify-end lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
              {links.map((link, i) => {
                return (
                  <li key={i}>
                    <Link href={link.href}>
                      <a className="font-bold hover:drop-shadow-xl">
                        {link.page}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
