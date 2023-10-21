import { searchIcon } from "@/assets";
import Image from "next/image";

export default function SearchModal({
  isOpen,
  onClose,
  onClick,
}: {
  isOpen?: boolean;
  onClose?: any;
  onClick?: any;
}) {
  return (
    <div
      className={`absolute transition duration-150 top-o left-0 w-full h-screen z-[60] bg-[#00000099] ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div onClick={onClose} className="w-full h-full relative">
        <form
          action=""
          className="absolute w-80 lg:w-[560px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        >
          <div className="flex w-full rounded-md ">
            <input
              onClick={onClick}
              type="text"
              placeholder="Procurar Aqui"
              className="flex-1 outline-none bg-white rounded-l-md p-4"
            />
            <button className="flex items-center flex-none p-4 rounded-r-md justify-center bg-secondaryColor">
              <Image src={searchIcon} className="w-5" alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
