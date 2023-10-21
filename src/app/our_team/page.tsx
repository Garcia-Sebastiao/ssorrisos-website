"use client";
import { banner01, member01, member02, member03, member04 } from "@/assets";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Title from "@/components/common/Title";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import MemberCard from "@/components/common/Card/MemberCard";
import ContactsBanner from "@/components/ContactsBanner";
import Animation from "@/components/common/Animation";
import Menu from "@/components/layout/Menu";
import { useState } from "react";
import SearchModal from "@/components/layout/SearchModal";

export default function Main() {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchModal, openSearchModal] = useState(false);

  return (
    <div className="w-full">
      <SearchModal
        isOpen={searchModal}
        onClose={() => openSearchModal(false)}
      />
      <Header
        page="team"
        openSearchModal={() => openSearchModal(true)}
        openMenu={() => setOpenMenu(true)}
      />
      <Menu page="team" isOpen={openMenu} closeMenu={() => setOpenMenu(false)} />

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
            Página Inicial / Nossa Equipe
          </span>
          <Title className="text-white text-5xl">Nossa Equipe</Title>
        </Animation>
      </section>

      <Container className="pb-32">
        <div className="w-full flex px-10 justify-center flex-wrap items-start gap-8">
          <MemberCard
            name="Dra. Elizabeth Suraia"
            role="Médica Odontologica"
            image={member01}
          />
          <MemberCard
            name="Dra. Ana Paula"
            role="Médica Dentista"
            image={member04}
          />
          <MemberCard
            name="Marlene Sapalo"
            role="Assistente"
            image={member02}
          />
          <MemberCard
            name="Felismino Caculo Cafina"
            role="Designer Gráfico"
            image={member03}
          />
        </div>
      </Container>

      <ContactsBanner />

      <Footer />
    </div>
  );
}
