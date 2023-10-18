import {
  emailIcon,
  facebookIcon,
  gpsIcon,
  instagramIcon,
  logo,
  phoneIcon,
  searchIcon,
  timeIcon,
  twitterIcon,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full z-10 relative pb-12">
      <div className="w-full border-b-[1px] border-gray-200 px-20 2xl:px-80">
        <div className="w-full h-full relative z-10 flex items-center justify-between py-3">
          <div className="absolute left-0 flex items-center justify-center top-0 w-28 h-36 rounded-b-full shadow-lg shadow-gray-200">
            <div className="w-48 flex-none h-full relative">
              <Image
                src={logo}
                className="absolute top-4 w-auto mt-12"
                alt="Ssorrisos"
              />
            </div>
          </div>

          <span className="text-sm pl-48 text-gray-500 font-DMSansMedium">
            Seja Benvindo(a) a Clínica Dentária Ssorrisos!
          </span>

          <div className="flex items-center gap-4">
            <Image src={instagramIcon} className="w-5" alt="" />
            <Image src={facebookIcon} className="w-5" alt="" />
            <Image src={twitterIcon} className="w-5" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between px-20 2xl:px-96 py-8">
        <div className="flex items-center pl-32 gap-4">
          <div>
            <Image src={emailIcon} className="w-10" alt="" />
          </div>

          <div className="flex flex-col">
            <small className="font-DMSansMedium text-gray-500">
              info@ssorrisos.com
            </small>
            <span className="text-primaryFont font-DMSansSemiBold">
              Envie-nos um email
            </span>
          </div>
        </div>

        <div className="w-[1px] h-12 bg-gray-300"></div>

        <div className="flex items-center gap-4">
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

        <div className="w-[1px] h-12 bg-gray-300"></div>

        <div className="flex items-center gap-4">
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

        <div className="w-[1px] h-12 bg-gray-300"></div>

        <div className="flex items-center gap-4">
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

      <div className="px-20 w-full absolute -bottom-8 2xl:px-80">
        <nav className="w-full flex justify-between items-center py-3 px-8 rounded-lg bg-secondaryColor">
          <ul className="flex items-center gap-10">
            <li>
              <Link
                className="text-sm text-primaryColor font-DMSansMedium"
                href=""
              >
                Página Inicial
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-white font-DMSansMedium"
                href="/about_us/"
              >
                Sobre nós
              </Link>
            </li>
            <li>
              <Link
                className="text-sm text-white font-DMSansMedium"
                href="/our_specialties/"
              >
                Nossas Especialidades
              </Link>
            </li>
            <li>
              <Link className="text-sm text-white font-DMSansMedium" href="/contact_us/">
                Fale Connosco
              </Link>
            </li>
            <li>
              <Link className="text-sm text-white font-DMSansMedium" href="/our_team/">
                Nossa Equipe
              </Link>
            </li>
          </ul>

          <div className="flex gap-6 items-center">
            <div className="w-[1px] bg-[#ffffff30] h-12"></div>

            <button>
              <Image src={searchIcon} className="w-9" alt="Pesquisar" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
