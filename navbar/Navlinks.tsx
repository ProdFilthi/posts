import Link from "next/link";
import React from "react";
const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Posts",
    href: "/posts",
  },
  {
    label: "Profiles",
    href: "/profiles",
  },
];

const Navlinks = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-20 mx-auto">
      <nav className="flex items-center justify-center">
        <ul className="flex gap-32 h-12 items-center justify-between border-b w-[700px] border-gray-800 px-8 rounded-b-lg">
          <li>
            <Link href="/">ProgFilthi</Link>
          </li>
          <li className="flex gap-4">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navlinks;
