"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";
import { useGlobalContext } from "../../_context";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { data: session, status } = useSession();
  const {  setIsWriteModalOpen } = useGlobalContext();

  return (
    <div className="flex h-full w-full flex-col">
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
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="flex items-center space-x-1 rounded-md border border-gray-200 px-2 py-1 transition hover:border-gray-400 hover:text-gray-800"
            >
              <span className="text-sm">Write</span>
              <RiFileEditLine className="text-xl" />
            </button>
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
      {children}
    </div>
  );
};

export default MainLayout;
