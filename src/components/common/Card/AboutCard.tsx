import { nextIconGray } from "@/assets";
import Image from "next/image";
import Link from "next/link";

export default function AboutCard({
  category,
  description,
  image,
}: {
  category: string;
  description: string;
  image: any;
}) {
  return (
    <div className="flex-1 lg:max-w-sm">
      <div className="w-full h-[460px]">
        <Image
          src={image}
          alt={description}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      <div className="-mt-8 p-6 flex flex-col gap-4 z-10 relative rounded-2xl bg-white shadow-sm w-[90%] rounded-ss-none">
        <div className="absolute left-10 -top-[21px]">
          <div className="py-1 px-3 relative bg-secondaryColor rounded-b-xl">
            <div className="border-t-transparent border-t-[17px] border-b-transparent border-b-0 border-r-primaryColor -z-10 border-r-[17px] absolute -left-4"></div>
            <span className="text-sm text-white">{category}</span>
          </div>
        </div>
        <Link
          href=""
          className="font-DMSansBold text-2xl text-primaryFont hover:text-primaryColor transition duration-150"
        >
          {description}
        </Link>

        <div className="w-full h-[1px] bg-gray-200"></div>

        <Link
          href="#"
          className="text-sm flex items-center gap-3 text-gray-400"
        >
          Ler Mais <Image src={nextIconGray} className="w-5" alt="" />
        </Link>
      </div>
    </div>
  );
}
