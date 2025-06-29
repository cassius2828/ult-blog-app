"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { useGlobalContext } from "../../_context";
import Header from "../../components/Modal/Header";
const MainLayout = ({ children }: React.PropsWithChildren) => {
  const { data: session, status } = useSession();
  const {  setIsWriteModalOpen } = useGlobalContext();

  return (
    <div className="flex h-full w-full flex-col">
      <Header
        session={session}
        status={status}
        setIsWriteModalOpen={setIsWriteModalOpen}
      />
      {children}
    </div>
  );
};

export default MainLayout;
