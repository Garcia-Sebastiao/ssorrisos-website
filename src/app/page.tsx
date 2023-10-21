"use client";
import { banner01, image01, texture01 } from "@/assets";
import Header from "@/components/layout/Header";
import Image from "next/image";
import Title from "@/components/common/Title";
import Container from "@/components/layout/Container";
import Link from "next/link";
import AboutCard from "@/components/common/Card/AboutCard";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";
import ContactsBanner from "@/components/ContactsBanner";
import Animation from "@/components/common/Animation";
import { motion } from "framer-motion";
import Menu from "@/components/layout/Menu";
import { useState } from "react";
import SearchModal from "@/components/layout/SearchModal";

export default function Main() {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchModal, openSearchModal] = useState(false);

  return (
    <div className="w-full relative overflow-x-hidden">
      <SearchModal
        isOpen={searchModal}
        onClose={() => openSearchModal(false)}
      />
      <Header page="home" openSearchModal={() => openSearchModal(true)} openMenu={() => setOpenMenu(true)} />
      <Menu page="home" isOpen={openMenu} closeMenu={() => setOpenMenu(false)} />
      

      <section className="w-full h-[80vh]  relative bg-gray-400">
        <Image
          className="w-full  h-full object-cover  object-center brightness-50"
          src={banner01}
          alt="Banner Image"
        />

        <div className="absolute flex items-start flex-col gap-8 xs:px-6 lg:px-20 2xl:px-80 left-0 top-[50%] -translate-y-[50%]">
          <div className="flex flex-col gap-4 items-start">
            <motion.span
              initial={{ y: -100, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-xl font-DMSansMedium text-white"
            >
              Seja Bemvindo(a)a Clínica Dentária Ssorrisos
            </motion.span>
            <motion.h1
              initial={{ y: 100, opacity: 0.3 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="xs:text-6xl lg:text-8xl font-DMSansSemiBold text-white max-w-sm"
            >
              Aqui Sorrimos Juntos
            </motion.h1>
          </div>

          <Button>DESCUBRA MAIS SOBRE NÓS</Button>
        </div>
      </section>

      <Container className="gap-12  xs:flex-wrap lg:flex-nowrap">
        <Animation position="fade-right" className="flex flex-col gap-4 ">
          <Title className="text-3xl">Nossas Especialidades</Title>
          <span className="text-sm text-gray-400 max-w-xs">
            Disponha de excelentes serviços de alta qualidade.
          </span>
        </Animation>

        <div className="flex items-center gap-16  xs:flex-wrap lg:flex-nowrap">
          <Animation
            position="zoom-in-up"
            className="flex flex-col items-start gap-6"
          >
            <div className="relative">
              <Title className="text-2xl">Consulta Adulto</Title>

              <div className="w-12 h-[6px] rounded-full bg-primaryColor absolute -bottom-2 left-0"></div>
            </div>

            <p className="text-sm text-gray-400  max-w-xs leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aspernatur molestiae quam placeat et,
            </p>

            <Link
              href="#"
              className="py-4 px-8 rounded-full bg-gray-300 text-sm text-gray-500 hover:brightness-75 transition duration-150"
            >
              Ver mais
            </Link>
          </Animation>

          <Animation
            position="zoom-in-up"
            className="flex flex-col items-start gap-6"
          >
            <div className="relative">
              <Title className="text-2xl">Consulta Infantil</Title>

              <div className="w-12 h-[6px] rounded-full bg-primaryColor absolute -bottom-2 left-0"></div>
            </div>

            <p className="text-sm text-gray-400  max-w-xs leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aspernatur molestiae quam placeat et,
            </p>

            <Link
              href="#"
              className="py-4 px-8 rounded-full bg-gray-300 text-sm text-gray-500 hover:brightness-75 transition duration-150"
            >
              Ver mais
            </Link>
          </Animation>

          <Animation
            position="zoom-in-up"
            className="flex flex-col items-start gap-6"
          >
            <div className="relative">
              <Title className="text-2xl">Consulta Profilática</Title>

              <div className="w-12 h-[6px] rounded-full bg-primaryColor absolute -bottom-2 left-0"></div>
            </div>

            <p className="text-sm text-gray-400  max-w-xs leading-loose">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aspernatur molestiae quam placeat et,
            </p>

            <Link
              href="#"
              className="py-4 px-8 rounded-full bg-gray-300 text-sm text-gray-500 hover:brightness-75 transition duration-150"
            >
              Ver mais
            </Link>
          </Animation>
        </div>
      </Container>

      <Container className="flex-row gap-16  xs:flex-wrap-reverse lg:flex-nowrap">
        <Animation position="fade-up" className="flex-1 h-96">
          <Image
            src={image01}
            alt="Agendamento"
            className="w-full h-full min-w-[320px] object-cover rounded-md"
          />
        </Animation>

        <Animation
          position="fade-down-left"
          className="flex-1 flex flex-col items-start gap-6"
        >
          <Title className="xs:text-4xl lg:text-6xl">
            Faça já seu Agendamento
          </Title>

          <p className="text-primaryColor font-DMSansMedium">
            Oferecemos os melhores serviços quando trata-se de higine bucal
          </p>

          <span className="text-primaryFont">
            Venha conhecer nossa clínica e renove seu sorriso.
          </span>

          <Button>AGENDAR MINHA CONSULTA AGORA</Button>
        </Animation>
      </Container>

      <Container className="flex-col relative gap-10 py-32 mt-20 bg-slate-100">
        <Image
          src={texture01}
          className="w-full h-full object-cover absolute left-0 top-0 opacity-[0.15]"
          alt=""
        />

        <div className="w-full z-10">
          <Animation position="fade-left" className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-DMSansMedium text-gray-400">
                Saiba sobre nós
              </span>
              <div className="w-12 h-1 bg-primaryColor"></div>
            </div>

            <Title className="xs:text-4xl lg:text-5xl max-w-4xl leading-tight">
              Com qualidade excelência, garantimos comodidade no nosso
              consultório.
            </Title>
          </Animation>
        </div>

        <div className="w-full z-10 flex items-start gap-10 flex-wrap">
          <AboutCard
            image={image01}
            description="Com muito carinho acomodamos nossos clientes."
            category="Consultório"
          />
          <AboutCard
            image={image01}
            description="Dispomos de consultório acomodador."
            category="Consultório"
          />
          <AboutCard
            image={image01}
            description="Com muito carinho acomodamos nossos clientes."
            category="Consultório"
          />
        </div>
      </Container>

      <ContactsBanner />
      <Footer />
    </div>
  );
}
