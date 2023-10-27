"use client";

import {
  banner01,
  emailIconBlack,
  gpsIconBlack,
  image01,
  logo,
  nextIcon,
  phoneIconBlack,
  texture01,
  timeIcon,
} from "@/assets";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Title from "@/components/common/Title";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import { useState } from "react";
import SearchModal from "@/components/layout/SearchModal";
import Menu from "@/components/layout/Menu";

export default function Main() {
  const [hover, setHover] = useState(false);
  const [searchModal, openSearchModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full relative">
      <SearchModal
        isOpen={searchModal}
        onClose={() => openSearchModal(false)}
      />
      <Header page="contacts" openSearchModal={() => openSearchModal(true)} openMenu={() => setOpenMenu(true)} />
      <Menu page="contacts" isOpen={openMenu} closeMenu={() => setOpenMenu(false)} />

      <section className="w-full h-[40vh]  relative bg-gray-400">
        <Image
          className="w-full  h-full object-cover  object-center brightness-50"
          src={banner01}
          alt="Banner Image"
        />

        <div className="flex absolute top-[50%] -translate-y-[50%] left-0 px-20 2xl:px-80 flex-col gap-2">
          <span className="text-sm text-white font-DMSansMedium">
            Página Inicial / Fale Connosco
          </span>
          <Title className="text-white text-5xl">Fale Connosco</Title>
        </div>
      </section>

      <Container className="gap-12 pb-64 xs:flex-wrap lg:flex-nowrap">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-DMSansMedium text-gray-400">
                Fale Connosco
              </span>
              <div className="w-12 h-1 bg-primaryColor"></div>
            </div>
            <Title className="text-5xl">Fale Connosco</Title>
          </div>

          <div className="flex flex-col relative pt-8 items-start gap-6">
            <div className="flex items-center gap-4">
              <div>
                <Image src={phoneIconBlack} className="w-10" alt="" />
              </div>

              <div className="flex flex-col">
                <small className="font-DMSansMedium text-gray-500">
                  Fale Connosco
                </small>
                <span className="text-primaryFont font-DMSansSemiBold">
                  +244 995902436
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>
                <Image src={emailIconBlack} className="w-10" alt="" />
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

            <div className="flex items-center gap-4">
              <div>
                <Image src={gpsIconBlack} className="w-10" alt="" />
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
        </div>

        <form action="" className="flex-1 items-start flex flex-col gap-4">
          <div className="flex w-full xs:flex-wrap lg:flex-nowrap items-center gap-4">
            <input
              type="text"
              className="p-4 rounded-md outline-none bg-slate-100 w-full text-gray-500"
              placeholder="Primeiro e Último nome"
            />
            <input
              type="email"
              className="p-4 rounded-md outline-none bg-slate-100 w-full text-gray-500"
              placeholder="Endereço de email"
            />
          </div>
          <div className="flex w-full xs:flex-wrap lg:flex-nowrap items-center gap-4">
            <input
              type="number"
              className="p-4 rounded-md outline-none bg-slate-100 w-full text-gray-500"
              placeholder="Telefone"
            />
            <input
              type="email"
              className="p-4 rounded-md outline-none bg-slate-100 w-full text-gray-500"
              placeholder="Assunto"
            />
          </div>

          <textarea
            name=""
            className="p-4 rounded-md outline-none max-h-[176px] min-h-[176px] bg-slate-100 w-full text-gray-500"
            id=""
            placeholder="Descreva aqui sua mensagem"
            cols={30}
            rows={10}
          />

          <button
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`py-2 pl-14 pr-3 rounded-full flex ${
              hover ? "bg-primaryColor" : "bg-secondaryColor"
            } transition duration-300`}
          >
            <div className="flex gap-4 items-center">
              <span className="text-sm font-DMSansSemiBold text-white">
                ENVIAR MENSAGEM
              </span>

              <div
                className={`p-3 rounded-full ${
                  hover ? "bg-secondaryColor" : "bg-primaryColor"
                } flec items-center justify-center`}
              >
                <Image src={nextIcon} alt="" className="w-5" />
              </div>
            </div>
          </button>
        </form>
      </Container>

      <Footer />
    </div>
  );
}
