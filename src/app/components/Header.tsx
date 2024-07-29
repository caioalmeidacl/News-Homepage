"use client"
import { HeaderProps } from "@/slices/Header";
import { PrismicNextImage } from "@prismicio/next";
import { useEffect, useState } from "react";


const iconMenu = (
  <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
    <g fill="#00001A" fillRule="evenodd">
      <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
      <path d="M0 0h40v3H0z" />
    </g>
  </svg>
);
const iconX = (
  <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
    <g fill="#00001A" fillRule="evenodd">
      <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
      <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
    </g>
  </svg>
);

export default function Header({ slice }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen)
      document.body.style.overflow = 'hidden';

    return () => { document.body.style.overflow = 'auto' };
  }, [menuOpen]);


  const list = (
    <ul className="desktop:flex">
      {slice.primary.group.map((item, index) => (
        <li key={index} className="mobile:mb-5 cursor-pointer desktop:mr-14 desktop:last:mr-0">
          <p className="text-dark-grayish-blue hover:text-soft-red">{item.nav}</p>
        </li>
      ))}
    </ul>
  );
  return (
    <section className="p-4">
      <div className="flex items-center desktop:mx-auto desktop:w-fit">
        <div className="desktop:mr-[760px]">
          <PrismicNextImage field={slice.primary.logo} />
        </div>

        <div className="ml-auto cursor-pointer desktop:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {iconMenu}
          </button>
        </div>

        <nav className="hidden desktop:block desktop:ml-auto">{list}</nav>
      </div>


      {menuOpen && (
        <section>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
          <div className="absolute top-0 right-0 z-50 w-4/6 min-h-screen bg-white">
            <div className="flex justify-end py-8 px-4">
              <button onClick={() => setMenuOpen(false)} className="relative text-dark-grayish-blue focus:outline-none">
                {iconX}
              </button>
            </div>
            <nav className="pl-8 mt-16">{list}</nav>
          </div>
        </section>
      )}

    </section>
  );
}
