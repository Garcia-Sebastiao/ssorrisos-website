"use client";
import Image from "next/image";
import Animation from "../Animation";
export default function MemberCard({
  image,
  name,
  role,
}: {
  image: any;
  name: string;
  role: string;
}) {
  return (
    <Animation position="fade-up" className="flex-1 min-w-[340px] lg:max-w-sm relative rounded-2xl lg:min-w-0">
      <Image
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-3xl"
      />

      <div className="w-[95%] absolute bottom-0 right-0 rounded-2xl rounded-tr-none rounded-bl-none bg-white ">
        <div className="relative p-6 pb-12 w-full h-full">
          <div className="absolute right-4 top-0 bg-primaryColor p-4 rounded-b-lg">
            <i className="fas fa-share-alt"></i>
          </div>
          <h2 className="text-xl font-DMSansSemiBold text-primaryFont">
            {name}
          </h2>
        </div>
      </div>

      <div className="absolute left-0 -bottom-[21px]">
          <div className="py-3 px-6 relative bg-secondaryColor rounded-tr-xl">
            <div className="border-t-transparent border-t-[20px] border-b-transparent border-b-0 border-r-primaryColor border-r-[20px] absolute left-0 -top-5"></div>
            <span className="text-sm text-white">{role}</span>
            <div className="border-t-transparent border-t-0 border-b-transparent border-b-[21px] border-l-primaryColor border-l-[20px] absolute -right-5 bottom-0"></div>
          </div>
        </div>
    </Animation>
  );
}
