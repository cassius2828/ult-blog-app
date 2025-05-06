import { signIn, signOut, useSession } from "next-auth/react";
import { type ReactNode } from "react";
import { FaRegBell } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { VscThreeBars } from "react-icons/vsc";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { data: sessionData, status } = useSession();

  return (
    <div className="flex h-full w-full flex-col">
      <header className="flex h-20 w-full items-center justify-between border-b-[1px] border-gray-200 bg-gray-50 lg:justify-around">
        {/* burger */}
        <div className="p-2">
          <VscThreeBars className="text-2xl text-gray-600" />
        </div>
        {/* logo / title */}
        <span className="text-xl font-thin">Ultimate Blog App</span>
        {/* nav actions */}
        <div className="flex items-center gap-4 p-2">
          {status === "authenticated" ? (
            <>
              <div>
                <FaRegBell className="text-xl" />
              </div>
              <div>
                <div className="h-5 w-5 rounded-full bg-gray-600" />
              </div>
              <button onClick={() => console.log('write new file')} className="flex items-center space-x-1 rounded-md border border-gray-200 px-2 py-1 transition hover:border-gray-400 hover:text-gray-800">
                <span className="text-sm">Write</span>
                <RiFileEditLine className="text-xl" />
              </button>
              <span>Welcome, {sessionData.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="flex items-center space-x-1 rounded-md border border-gray-200 px-2 py-1 transition hover:border-gray-400 hover:text-gray-800"
              >
                <span className="text-sm">Sign Out</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="flex items-center space-x-1 rounded-md border border-gray-200 px-2 py-1 transition hover:border-gray-400 hover:text-gray-800"
            >
              <span className="text-sm">Sign In</span>
            </button>
          )}
        </div>
      </header>

      {children}
    </div>
  );
};

export default MainLayout;
