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
import Link from "next/link";
import AboutCard from "@/components/common/Card/AboutCard";
import Footer from "@/components/layout/Footer";
import Button from "@/components/common/Button";

export default function Main() {
  return (
    <div className="w-full">
      <Header />

      <section className="w-full h-[80vh]  relative bg-gray-400">
        <Image
          className="w-full  h-full object-cover  object-center brightness-50"
          src={banner01}
          alt="Banner Image"
        />

        <div className="absolute flex items-start flex-col gap-8 px-20 2xl:px-80 left-0 top-[50%] -translate-y-[50%]">
          <div className="flex flex-col gap-4 items-start">
            <span className="text-xl font-DMSansMedium text-white">
              Seja Bemvindo(a)a Clínica Dentária Ssorrisos
            </span>
            <h1 className="text-8xl font-DMSansSemiBold text-white max-w-sm">
              Aqui Sorrimos Juntos
            </h1>
          </div>

          <Button>DESCUBRA MAIS SOBRE NÓS</Button>
        </div>
      </section>

      <Container className="gap-12">
        <div className="flex flex-col gap-4">
          <Title className="text-3xl">Nossas Especialidades</Title>
          <span className="text-sm text-gray-400 max-w-xs">
            Disponha de excelentes serviços de alta qualidade.
          </span>
        </div>

        <div className="flex items-center gap-16">
          <div className="flex flex-col items-start gap-6">
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
          </div>

          <div className="flex flex-col items-start gap-6">
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
          </div>

          <div className="flex flex-col items-start gap-6">
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
          </div>
        </div>
      </Container>

      <Container className="flex-row gap-16">
        <div className="flex-1 h-96">
          <Image
            src={image01}
            alt="Agendamento"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex-1 flex flex-col items-start gap-6">
          <Title className="text-6xl">Faça já seu Agendamento</Title>

          <p className="text-primaryColor font-DMSansMedium">
            Oferecemos os melhores serviços quando trata-se de higine bucal
          </p>

          <span className="text-primaryFont">
            Venha conhecer nossa clínica e renove seu sorriso.
          </span>

          <Button>AGENDAR MINHA CONSULTA AGORA</Button>
        </div>
      </Container>

      <Container className="flex-col relative gap-10 py-32 mt-20 bg-slate-100">
        <Image
          src={texture01}
          className="w-full h-full object-cover absolute left-0 top-0 opacity-[0.15]"
          alt=""
        />

        <div className="w-full z-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-DMSansMedium text-gray-400">
                Saiba sobre nós
              </span>
              <div className="w-12 h-1 bg-primaryColor"></div>
            </div>

            <Title className="text-5xl max-w-4xl leading-tight">
              Com qualidade excelência, garantimos comodidade no nosso
              consultório.
            </Title>
          </div>
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

      <section className="px-80">
        <div className="mx-14 flex flex-col items-center z-10 py-[72px] relative rounded-xl bg-primaryColor shadow-lg">
          <div className="absolute bg-white shadow-md top-4 left-[50%] -translate-x-[50%] bottom-5 rounded-md w-[110%] p-10" />

          <div className="absolute -top-12 left-[50%] -translate-x-[50%] bg-white w-32 h-32 rounded-full shadow-lg">
            <div className="w-full h-full flex items-center justify-center relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center bg-white rounded-full p-2">
                <Image src={logo} alt="Logo" />
              </div>

              <div className="absolute w-80 flex left-[50%] -translate-x-[50%] top-20 -z-10 flex-col items-center gap-2">
                <div className="w-full bg-primaryColor h-[3px]" />
                <div className="w-[90%] bg-secondaryColor h-[3px]" />
              </div>
            </div>
          </div>

          <div className="flex relative z-10 pt-8 items-center gap-28">
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
                  info@ssorrisos.com
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
      </section>

      <Footer />
    </div>
  );
}
