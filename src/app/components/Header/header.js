import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";

export default function Navbar() {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <div className="flex items-center">
          <Image src={logo} alt="XavGym Logo" width={80} height={80} />
          <span
            className="ml-4 text-2xl font-bold font-roboto"
            style={{ color: "#a2a2a2" }}
          >
            XavGym
          </span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul
            className="flex space-x-8 text-lg font-worksans"
            style={{ color: "#a2a2a2" }}
          >
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-white transition">
                Profile
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-white transition">
                Login
              </Link>
            </li>
            <li>
              <Link href="/event" className="hover:text-white transition">
                Event
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
