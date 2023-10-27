import Link from "next/link";
import Title from "../common/Title";
import Image from "next/image";
import {
  facebookIconWhite,
  instagramIconWhite,
  sendIcon,
  twitterIconWhite,
} from "@/assets";
import Button from "../common/Button";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col relative bg-secondaryColor -mt-24">
      <div className="flex items-start gap-10 md:justify-center lg:justify-between xs:px-6 lg:px-20 py-36 2xl:px-80  xs:flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-4">
          <Title className="text-white text-2xl">Midias Sociais</Title>

          <span className="text-white max-w-xs">
            Fale connosco usando nossas medias sociais disponíveis abaixo.
          </span>

          <div className="flex items-center gap-3">
            <Link
              href=""
              className="p-3 rounded-full bg-primaryColor flex items-center justify-center"
            >
              <Image className="w-5" src={facebookIconWhite} alt="Facebook" />
            </Link>
            <Link
              href="https://www.instagram.com/clinicadentaria_ssorrisos/"
              className="p-3 rounded-full bg-primaryColor flex items-center justify-center"
            >
              <Image className="w-5" src={instagramIconWhite} alt="Facebook" />
            </Link>
            <Link
              href=""
              className="p-3 rounded-full bg-primaryColor flex items-center justify-center"
            >
              <Image className="w-5" src={twitterIconWhite} alt="Facebook" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Title className="text-white text-2xl">Links</Title>

          <ul className="flex flex-col items-start gap-4">
            <li>
              <Link
                className="text-white text-sm hover:brightness-75 transition duration-150"
                href=""
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm hover:brightness-75 transition duration-150"
                href=""
              >
                Nossas Especialidades
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm hover:brightness-75 transition duration-150"
                href=""
              >
                Agendamento
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm hover:brightness-75 transition duration-150"
                href=""
              >
                Fale Connosco
              </Link>
            </li>
            <li>
              <Link
                className="text-white text-sm hover:brightness-75 transition duration-150"
                href=""
              >
                Nossa Equipe
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <Title className="text-white text-2xl">Marcar Consulta</Title>

          <Button className="bg-[#1a1a1a] pl-28">CLIQUE AQUI</Button>
          <Link href={'https://api.whatsapp.com/send/?phone=244926726041'} target="blank">
          <button className="px-20 py-2 rounded-md bg-primaryColor text-white hover:brightness-75 transition duration-150">
            Nosso WhatsApp
          </button>
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          <Title className="text-white text-2xl">Newslatter</Title>

          <span className="text-white leading-loose max-w-xs">
            {" "}
            Assine nossa news Latters para estar apar de todas as nossas
            Novidades.
          </span>

          <form action="">
            <div className="flex bg-[#ffffff30] items-center gap-2 px-3 rounded-md">
              <input
                type="text"
                placeholder="Digite seu email"
                className="bg-transparent py-4 flex-1 outline-none text-white"
              />

              <button className="p-3 rounded-full bg-primaryColor flex items-center justify-center transition duration-300 hover:brightness-75">
                <Image src={sendIcon} className="w-5" alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full bg-primaryColor p-6 flex items-center justify-center">
        <span className="text-white text-center">
          © Copyright 2023 Desenvolvido Garcia Sebastião e Mantido por Luís Afonso Caputo
        </span>
      </div>
    </footer>
  );
}
