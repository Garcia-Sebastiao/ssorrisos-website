"use client";
import { nextIcon } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href=""
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${className} py-2 pl-14 pr-3 rounded-full flex ${hover ? 'bg-primaryColor' : 'bg-secondaryColor'} transition duration-300`}
    >
      <div className="flex gap-4 items-center">
        <span className="text-sm font-DMSansSemiBold text-white">
          {children}
        </span>

        <div className={`p-3 rounded-full ${hover  ? 'bg-secondaryColor' : 'bg-primaryColor'} flec items-center justify-center`}>
          <Image src={nextIcon} alt="" className="w-5" />
        </div>
      </div>
    </Link>
  );
}
