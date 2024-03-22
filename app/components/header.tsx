"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <header>
      <nav className="hidden md:flex justify-around items-center h-[12vh]">
        <div className="text-lg cursor-default">Nicolas Rosal</div>
        <div>
          <ul className="flex gap-8 list-none text-lg">
            <DesktopNavItem href="#about">About</DesktopNavItem>
            <DesktopNavItem href="#experience">Experience</DesktopNavItem>
            <DesktopNavItem href="#projects">Projects</DesktopNavItem>
            <DesktopNavItem href="#contact">Contact</DesktopNavItem>
          </ul>
        </div>
      </nav>
      <nav className="md:hidden flex justify-around items-center h-[12vh]">
        <div className="text-lg cursor-default">Nicolas Rosal</div>
        <div className="relative inline-block">
          <HamburgerIcon menuOpen={menuOpen} onClick={toggleMenu} />
          <div
            className={`${
              menuOpen ? "max-h-[300px]" : "max-h-0"
            } absolute top-full right-0 text-center bg-white w-auto overflow-hidden transition-all duration-10 ease-in-out`}
          >
            <MobileNavItem href="#about" onClick={toggleMenu}>
              About
            </MobileNavItem>
            <MobileNavItem href="#experience" onClick={toggleMenu}>
              Experience
            </MobileNavItem>
            <MobileNavItem href="#projects" onClick={toggleMenu}>
              Projects
            </MobileNavItem>
            <MobileNavItem href="#contact" onClick={toggleMenu}>
              Contact
            </MobileNavItem>
          </div>
        </div>
      </nav>
    </header>
  );
}

interface DesktopNavItemProps {
  href: string;
  children: React.ReactNode;
}

function DesktopNavItem(props: DesktopNavItemProps) {
  return (
    <li>
      <button className="transition duration-300 ease-in-out transform hover:-translate-y-1">
        <a
          href={props.href}
          className="transition duration-300 ease text-black no-underline hover:text-customGreen"
        >
          {props.children}
        </a>
      </button>
    </li>
  );
}

interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavItem(props: MobileNavItemProps) {
  return (
    <li className="list-none">
      <button className="transition duration-300 ease-in-out transform hover:-translate-y-1">
        <a
          href={props.href}
          className="block py-2 px-4 text-lg text-black no-underline transition-all duration-300 ease-in-out hover:text-customGreen"
          onClick={props.onClick}
        >
          {props.children}
        </a>
      </button>
    </li>
  );
}

interface HamburgerIconProps {
  menuOpen: boolean;
  onClick: () => void;
}

function HamburgerIcon(props: HamburgerIconProps) {
  return (
    <div
      className={`flex flex-col justify-between h-6 w-8 cursor-pointer ${
        props.menuOpen ? "open" : ""
      }`}
      onClick={props.onClick}
    >
      <span
        style={{ backgroundColor: "black" }}
        className={`${
          props.menuOpen
            ? "rotate-45 -translate-x-0.5 translate-y-3"
            : "transition-none"
        } block w-4/5 h-px transition-all duration-100 ease-in-out`}
      ></span>
      <span
        style={{ backgroundColor: "black" }}
        className={`${
          props.menuOpen ? "opacity-0" : "opacity-100"
        } block w-4/5 h-px transition-all duration-100 ease-in-out`}
      ></span>
      <span
        style={{ backgroundColor: "black" }}
        className={`${
          props.menuOpen
            ? "-rotate-45 -translate-x-0.5 -translate-y-2.5"
            : "transition-none"
        } block w-4/5 h-px transition-all duration-100 ease-in-out`}
      ></span>
    </div>
  );
}
