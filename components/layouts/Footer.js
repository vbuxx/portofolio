import Link from "next/link";
import Container from "../Container";

function Footer() {
  return (
    <div className="my-auto -mb-0.5">
      <footer
        className="flex mt-auto items-center justify-between font-medium py-8
        "
      >
        <h3 className="">© 2022 Andhika Pramana</h3>
        <div className="flex items-center space-x-6">
          <a href="/">
            <img src="/github.svg" alt="" className="w-8 hover:opacity-75" />
          </a>
          <a href="/">
            <img src="/instagram.svg" alt="" className="w-8 hover:opacity-75" />
          </a>
          <a href="/">
            <img src="/linkedin.svg" alt="" className="w-8 hover:opacity-75" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
