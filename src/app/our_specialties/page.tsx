"use client";
import { banner01 } from "@/assets";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Title from "@/components/common/Title";
import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import SpecialtyCard from "@/components/common/Card/SpecialtyCard";
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
        page="specialty"
        openSearchModal={() => openSearchModal(true)}
        openMenu={() => setOpenMenu(true)}
      />
      <Menu page="specialty" isOpen={openMenu} closeMenu={() => setOpenMenu(false)} />

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
            Página Inicial / Nossas Especialidades
          </span>
          <Title className="text-white text-5xl">Nossas Especialidades</Title>
        </Animation>
      </section>

      <Container className="pb-56 justify-start gap-16 flex-wrap">
        <SpecialtyCard
          specialty="Implantologia"
          description="Substituição de dentes perdidos com implante dentário."
        />
        <SpecialtyCard
          specialty="Odontopediatria"
          description="Consulta dentária para menores"
        />
        <SpecialtyCard
          specialty="Desisteria e Estética"
          description=" Reconstrução dos dentes cariados, encerramento dos espaços e branqueamentos."
        />
        <SpecialtyCard
          specialty="Pediorontologia"
          description="Tratamento das estruturas de suporte dos dentes."
        />
        <SpecialtyCard
          specialty="Endodontia"
          description=" Remoção da polpa dent+aria vulgarmente designada por desvitalização"
        />
        <SpecialtyCard
          specialty="Facetas Dentárias"
          description="Revestimento de material Estético desenhado e personalizado que adere e cobre toda a superfície da parte anterior dos dentes."
        />
        <SpecialtyCard
          specialty="Prótese Fixa"
          description=" Protése de cerâmica ou resinas sobre dentes naturais ou implantes."
        />
        <SpecialtyCard
          specialty="Protése Removível"
          description=" Protese de metal ou acrílico que pode ser retirada para limpeza pela pessoa que a usa."
        />
        <SpecialtyCard
          specialty="Ortodontia"
          description=" Correção dos dentes e dos ossos maxilares."
        />
        <SpecialtyCard
          specialty="Profilaxia e Higiene Oral"
          description=" Manutenção e limpeza da cavidade Oral."
        />
      </Container>

      <ContactsBanner />

      <Footer />
    </div>
  );
}
