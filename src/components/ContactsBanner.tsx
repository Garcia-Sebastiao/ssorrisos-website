
import { emailIconBlack, gpsIconBlack, logo, phoneIconBlack } from "@/assets";
import Image from "next/image";

export default function ContactsBanner() {
  return (
    <section className="xs:px-6 lg:px-80 flex flex-col items-center">
      <div className="mx-14 flex w-full flex-col items-center z-10 py-[72px] relative rounded-xl bg-primaryColor shadow-lg">
        <div className="absolute bg-white shadow-md top-4 left-[50%] -translate-x-[50%] bottom-5 rounded-md xs:w-full lg:w-[110%] p-10" />

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

        <div className="flex relative z-10 pt-8 items-center lg:flex-row xs:flex-col lg:gap-28 xs:gap-12 xs:flex-wrap lg:flex-nowrap">
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
    </section>
  );
}
