import Link from "next/link";
import Container from "../Container";

function Footer() {
  return (
    <div className="mt-auto ">
      <footer
        className="flex flex-col-reverse md:flex-row items-center justify-between font-medium py-8 md:py-12 
        "
      >
        <h3 className="my-4">© 2022 Andhika Pramana</h3>
        <div className="flex items-center space-x-6">
          <a href="https://github.com/vbuxx">
            <img src="/github.svg" alt="" className="w-8 hover:opacity-75" />
          </a>
          <a href="https://www.instagram.com/flavoocx/">
            <img src="/instagram.svg" alt="" className="w-8 hover:opacity-75" />
          </a>
          <a href="https://www.linkedin.com/in/andhikapramana/">
            <img src="/linkedin.svg" alt="" className="w-8 hover:opacity-75" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
