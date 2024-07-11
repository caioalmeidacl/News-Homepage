"use client"
import { HeaderProps } from "@/slices/Header";
import { PrismicNextImage } from "@prismicio/next";
import { useState } from "react";


const iconMenu = <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z"/><path d="M0 0h40v3H0z"/></g></svg>
const iconX = <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fill-rule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg>


export default function Header({ slice }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="desktop:px-4 desktop:py-8 mobile:p-4 w-full ">
      <div className="flex desktop:w-9/12 desktop:px-0 justify-between items-center desktop:mx-auto ">
        <PrismicNextImage field={slice.primary.logo} alt=""/>
        <div className="desktop:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-darkGrayishBlue focus:outline-none">
            {iconMenu}
          </button>
        </div>

        <nav className="hidden desktop:block ">
          <ul className="flex">
            {slice.primary.group.map((item, index) => (
              <li key={index} className="mr-10 pl-4 cursor-pointer">
                <p className="text-lg text-darkGrayishBlue hover:text-softRed">{item.nav}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {menuOpen && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
          <div className="absolute top-0 right-0 z-50 w-4/6 h-full bg-white flex flex-col desktop:hidden">
            <button onClick={() => setMenuOpen(false)} className="relative text-darkGrayishBlue focus:outline-none self-end p-4">
              {iconX}
            </button>
            <ul className="flex flex-col mt-16 ">
              {slice.primary.group.map((item, index) => (
                <li key={index} className="mb-6 px-4">
                  <p className="text-base text-veryDarkBlue">{item.nav}</p>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </section>
  );
}
