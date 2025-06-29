import { type Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
("use client");

import { FaRegBell } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import Button from "../Button";
type HeaderProps = {
  session: Session | null;
  setIsWriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  status: "authenticated" | "unauthenticated" | "loading";
};
const Header = ({ session, setIsWriteModalOpen, status }: HeaderProps) => {
  return (
    <header className="flex h-20 w-full items-center justify-between border-b-[1px] border-gray-200 bg-gray-50 lg:justify-around">
      {/* burger */}
      <div className="p-2">
        <VscThreeBars className="text-2xl text-gray-600" />
      </div>

      <span className="text-xl font-thin">Ultimate Blog App</span>

      {status === "authenticated" ? (
        // nav actions
        <div className="flex items-center gap-4 p-2">
          <div>
            <FaRegBell className="text-xl" />
          </div>
          <div>
            <div className="h-5 w-5">
              <Image
                width={20}
                height={20}
                src={session?.user?.image || ""}
                alt="User Avatar"
                className="h-full w-full rounded-full"
              />
            </div>
          </div>
          <Button handleButtonClick={() => setIsWriteModalOpen(true)}>
            <span className="text-sm">Write</span>
            <RiFileEditLine className="text-xl" />
          </Button>
          <div
            onClick={() => {
              signOut();
            }}
            className="cursor-pointer px-4 py-2 text-sm text-gray-600 transition hover:text-gray-800"
          >
            sign out
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            signIn();
          }}
          className="cursor-pointer px-4 py-2 text-sm text-gray-600 transition hover:text-gray-800"
        >
          sign in
        </div>
      )}
    </header>
  );
};

export default Header;
