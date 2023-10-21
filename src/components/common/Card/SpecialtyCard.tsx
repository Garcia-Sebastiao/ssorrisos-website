"use client";
import { nextIcon, nextIconGray } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import Animation from "../Animation";

export default function SpecialtyCard({
  specialty,
  description,
}: {
  specialty: string;
  description: string;
}) {
  return (
    <Animation position="zoom-in-up" className="p-5 min-w-[350px] flex flex-col gap-3 rounded-xl rounded-tl-none bg-white shadow-lg shadow-gray-200 relative">
      <div className="absolute left-10 -top-5">
        <div className="py-2 px-3 relative flex items-center justify-center bg-secondaryColor rounded-b-xl">
          <div className="border-t-transparent border-t-[17px] border-b-transparent border-b-0 border-r-primaryColor -z-10 border-r-[17px] absolute -left-4 top-0"></div>
          <span className="text-sm text-white ">Especialidade</span>
        </div>
      </div>
      <h3 className="text-2xl font-DMSansSemiBold text-primaryFont">
        {specialty}
      </h3>
      <span className="text-sm text-gray-400 max-w-xs">{description}</span>
      <div className="w-full h-[1px] bg-gray-200" />
      <Link href="" className="flex font-DMSansSemiBold text-gray-500 items-center text-sm gap-2">
        Agendar consulta agora{" "}
        <Image src={nextIconGray} className="w-4" alt="" />
      </Link>
    </Animation>
  );
}
