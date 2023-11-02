"use client";
import {
  banner01,
  image01,
  member01,
  member02,
  member03,
  texture02,
} from "@/assets";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Title from "@/components/common/Title";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import MemberCard from "@/components/common/Card/MemberCard";
import ContactsBanner from "@/components/ContactsBanner";
import Animation from "@/components/common/Animation";
import { useState, useEffect } from "react";
import SearchModal from "@/components/layout/SearchModal";
import Menu from "@/components/layout/Menu";
import { MEMBERS_TEAM } from "@/infra";

export default function Main() {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchModal, openSearchModal] = useState(false);

  return (
    <div className="w-full relative overflow-x-hidden">
      <SearchModal
        isOpen={searchModal}
        onClose={() => openSearchModal(false)}
      />
      <Header
        page="about_us"
        openSearchModal={() => openSearchModal(true)}
        openMenu={() => setOpenMenu(true)}
      />
      <Menu page="about_us" isOpen={openMenu} closeMenu={() => setOpenMenu(false)} />

      <section className="w-full h-[40vh]  relative bg-gray-400">
        <Image
          className="w-full  h-full object-cover  object-center brightness-50"
          src={banner01}
          alt="Banner Image"
        />

        <Animation
          position="fade-right"
          className="flex absolute top-[50%] -translate-y-[50%] left-0 px-20 2xl:px-80 flex-col gap-2"
        >
          <span className="text-sm text-white font-DMSansMedium">
            Página Inicial / Sobre Nós
          </span>
          <Title className="text-white xs:text-4xl lg:text-5xl">
            Sobre Nós
          </Title>
        </Animation>
      </section>

      <Container className="flex-row items-start lg:gap-28 xs:gap-14 xs:flex-wrap-reverse lg:flex-nowrap">
        <Animation
          position="fade-up-right"
          className="w-[460px] min-w-[320px] relative h-[460px]"
        >
          <Image
            src={image01}
            alt="Agendamento"
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="w-7 h-7 rounded-full bg-secondaryColor absolute -left-12 top-[50%] -translate-y-[50%]" />
          <div className="absolute top-0 left-0 w-full h-[95%] rounded-xl bg-primaryColor rotate-[4deg] -z-10" />
        </Animation>

        <Animation
          position="fade-down-left"
          className="flex-1 flex flex-col items-start gap-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-DMSansMedium text-gray-400">
                Saiba mais sobre nós
              </span>
              <div className="w-12 h-1 bg-primaryColor"></div>
            </div>
            <Title className="xs:text-4xl lg:text-6xl">
              O que é a Clínica Dentária Ssorrisos?
            </Title>
          </div>

          <p className="text-gray-400 leading-loose">
            A nossa clinica tem mais de 3 anos de atividade no mercado angolano.
            Atualmente estamos localizados na Vila do Gamek, De frente a
            Motocross. Estamos focados em melhor servi-lo. Visite-nos e conheça
            os serviços que temos para si.
          </p>

          <Button>AGENDAR MINHA CONSULTA AGORA</Button>
        </Animation>
      </Container>

      <Container className="flex-col relative gap-10 py-32 mt-20 bg-slate-100">
        <Image
          src={texture02}
          className="w-full h-full object-cover absolute left-0 top-0"
          alt=""
        />

        <div className="w-full flex flex-col gap-14 z-10">
          <Animation
            position="fade-left"
            className="flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="font-DMSansMedium text-gray-400">
                Temos Membros de Equipe Incríveis
              </span>
              <div className="w-6 h-1 bg-primaryColor"></div>
            </div>

            <Title className="text-5xl text-secondaryColor max-w-3xl font-DMSansBold text-center leading-tight">
              Conheça Nossa Experiência & Equipe Profissional
            </Title>
          </Animation>

          <div className="flex items-start xs:flex-wrap-reverse lg:flex-nowrap gap-14">
            {
              MEMBERS_TEAM.map((member, index) => (
                <MemberCard
                  key={index}
                  name={member.NAME}
                  role={member.SPECIALTY}
                  image={member.PICTURE}
                />
              ))
            }
          </div>
        </div>
      </Container>

      <ContactsBanner />

      <Footer />
    </div>
  );
}
