"use client";
import {
  emailIcon,
  facebookIcon,
  gpsIcon,
  instagramIcon,
  logo,
  menuIcon,
  phoneIcon,
  searchIcon,
  timeIcon,
  twitterIcon,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SOCIAL_MEDIAS } from "@/infra";

export default function Header({
  openSearchModal,
  openMenu,
  page
}: {
  openSearchModal?: any;
  openMenu?: any;
  page: string
}) {
  const [menuFixed, setMenuFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setMenuFixed(true) : setMenuFixed(false);
    });
  });

  return (
    <header className="w-full z-50 relative pb-12">
      <div className="w-full lg:border-b-[1px] lg:border-gray-200 px-20 2xl:px-80">
        <div className="w-full h-full relative z-10 flex items-center justify-between py-3">
          <div className="absolute xs:left-[50%] xs:-translate-x-[50%] lg:-translate-x-0 lg:left-0 flex items-center justify-center top-0 w-28 h-36 rounded-b-full shadow-lg shadow-gray-200">
            <div className="w-48 flex-none h-full relative">
              <Image
                src={logo}
                className="absolute top-4 w-auto mt-12"
                alt="Ssorrisos"
              />
            </div>
          </div>

          <span className="text-sm pl-48 text-gray-500 font-DMSansMedium xs:hidden lg:block">
            Seja Benvindo(a) a Clínica Dentária Ssorrisos!
          </span>

          <div className="items-center gap-4 xs:hidden lg:flex">
            <Link href={SOCIAL_MEDIAS.INSTAGRAM}>
              <Image src={instagramIcon} className="w-5" alt="" />
              </Link>
            <Link href={SOCIAL_MEDIAS.FACEBOOK}>            
              <Image src={facebookIcon} className="w-5" alt="" />
            </Link>
            <Image src={twitterIcon} className="w-5" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-20 2xl:px-96 lg:py-8 xs:py-20">
        <div className="lg:flex xs:hidden items-center pl-32 gap-4">
          <div>
            <Image src={emailIcon} className="w-10" alt="" />
          </div>

          <div className="flex flex-col">
            <small className="font-DMSansMedium text-gray-500">
              ssorrisosclinica@gmail.com
            </small>
            <span className="text-primaryFont font-DMSansSemiBold">
              Envie-nos um email
            </span>
          </div>
        </div>

        <div className="w-[1px] xs:hidden lg:block h-12 bg-gray-300"></div>

        <div className="lg:flex xs:hidden items-center gap-4">
          <div>
            <Image src={timeIcon} className="w-10" alt="" />
          </div>

          <div className="flex flex-col">
            <small className="font-DMSansMedium text-gray-500">
              Terça à Sábado
            </small>
            <span className="text-primaryFont font-DMSansSemiBold">
              09h00 - 18h00
            </span>
          </div>
        </div>

        <div className="w-[1px] xs:hidden lg:block h-12 bg-gray-300"></div>

        <div className="lg:flex xs:hidden items-center gap-4">
          <div>
            <Image src={phoneIcon} className="w-10" alt="" />
          </div>

          <div className="flex flex-col">
            <small className="font-DMSansMedium text-gray-500">
              Fale connosco
            </small>
            <span className="text-primaryFont font-DMSansSemiBold hover:text-primaryColor transition duration-150">
              +244 995902436
            </span>
          </div>
        </div>

        <div className="w-[1px] xs:hidden lg:block h-12 bg-gray-300"></div>

        <div className="lg:flex xs:hidden items-center gap-4">
          <div>
            <Image src={gpsIcon} className="w-10" alt="" />
          </div>

          <div className="flex flex-col">
            <small className="font-DMSansMedium text-gray-500">
              Vila Do Gamek, Frente e Motocross
            </small>
            <span className="text-primaryFont font-DMSansSemiBold">
              Luanda - Angola
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 w-full absolute -bottom-8 flex items-center justify-center 2xl:px-80">
        <motion.nav
          initial={menuFixed ? { y: -200 } : {}}
          whileInView={menuFixed ? { y: 0, opacity: 1 } : {}}
          exit={{}}
          transition={{ duration: 1 }}
          className={`w-full flex justify-between items-center py-3 px-8 rounded-lg bg-secondaryColor ${menuFixed
              ? "fixed top-0 rounded-none px-6 2xl:px-80 z-[999]"
              : "block"
            }`}
        >
          <button onClick={openMenu} className="xs:block lg:hidden">
            <Image src={menuIcon} alt="Menu" className="w-5" />
          </button>

          <ul className="xs:hidden lg:flex items-center gap-10">
            <li>
              <Link
                className={`text-sm font-DMSansMedium ${page == 'home' ? 'text-primaryColor' : 'text-white'}`}
                href="/"
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-DMSansMedium ${page == 'about_us' ? 'text-primaryColor' : 'text-white'}`}
                href="/about_us/"
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-DMSansMedium ${page == 'specialty' ? 'text-primaryColor' : 'text-white'}`}
                href="/our_specialties/"
              >
                Nossas Especialidades
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-DMSansMedium ${page == 'contacts' ? 'text-primaryColor' : 'text-white'}`}
                href="/contact_us/"
              >
                Fale Connosco
              </Link>
            </li>
            <li>
              <Link
                className={`text-sm font-DMSansMedium ${page == 'team' ? 'text-primaryColor' : 'text-white'}`}
                href="/our_team/"
              >
                Nossa Equipe
              </Link>
            </li>
          </ul>

          <div className="flex gap-6 items-center">
            <div className="w-[1px] bg-[#ffffff30] h-12"></div>

            <button onClick={openSearchModal}>
              <Image src={searchIcon} className="w-9" alt="Pesquisar" />
            </button>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
