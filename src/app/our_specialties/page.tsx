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
import { SPECIALTIES } from "@/infra";

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
        {
          SPECIALTIES.map((specialty, index) => {
            return (
              <SpecialtyCard
                key={index}
                specialty={specialty.NAME}
                description={specialty.DESCRIPTION}
              />
            )
          })
        }
      </Container>

      <ContactsBanner />

      <Footer />
    </div>
  );
}
