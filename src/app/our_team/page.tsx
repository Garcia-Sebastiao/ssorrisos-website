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

      <section className="w-full h-[40vh]  relative bg-gray-400">
        <Image
          className="w-full  h-full object-cover  object-center brightness-50"
          src={banner01}
          alt="Banner Image"
        />

        <div className="flex absolute top-[50%] -translate-y-[50%] left-0 px-20 2xl:px-80 flex-col gap-2">
          <span className="text-sm text-white font-DMSansMedium">
            Página Inicial / Nossa Equipe
          </span>
          <Title className="text-white text-5xl">Nossa Equipe</Title>
        </div>
      </section>

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
