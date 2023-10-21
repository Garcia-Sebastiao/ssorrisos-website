"use client";
import Link from "next/link";
import Image from "next/image";
import { closeIcon, logo, menuIcon, searchIcon } from "@/assets";

export default function Menu({
  closeMenu,
  isOpen,
  page,
}: {
  closeMenu: any;
  isOpen: boolean;
  page: string;
}) {
  return (
    <div
      onClick={closeMenu}
      className={`fixed z-[999] top-0 left-0 bg-[#00000099] w-full h-screen transition duration-150 ${
        isOpen ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <nav
        className={`w-[80%] h-screen flex py-10 px-8 flex-col gap-20 transition duration-150 delay-300 shadow-md bg-secondaryColor ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <Image src={logo} alt="Logo" className="w-44" />

          <button onClick={closeMenu}>
            <Image src={closeIcon} alt="Logo" className="w-7" />
          </button>
        </div>

        <ul className=" items-start flex flex-col gap-10">
          <li>
            <Link
              className={`text-sm font-DMSansMedium ${
                page == "home" ? "text-primaryColor" : "text-white"
              }`}
              href="/"
            >
              Página Inicial
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-DMSansMedium ${
                page == "about_us" ? "text-primaryColor" : "text-white"
              }`}
              href="/about_us/"
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-DMSansMedium ${
                page == "specialty" ? "text-primaryColor" : "text-white"
              }`}
              href="/our_specialties/"
            >
              Nossas Especialidades
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-DMSansMedium ${
                page == "contacts" ? "text-primaryColor" : "text-white"
              }`}
              href="/contact_us/"
            >
              Fale Connosco
            </Link>
          </li>
          <li>
            <Link
              className={`text-sm font-DMSansMedium ${
                page == "team" ? "text-primaryColor" : "text-white"
              }`}
              href="/our_team/"
            >
              Nossa Equipe
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
