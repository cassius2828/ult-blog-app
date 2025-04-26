import { VscThreeBars } from "react-icons/vsc";
import { FaRegBell } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const HomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col">
      {/* header */}
      <header className="flex h-20 w-full items-center justify-between border-b-[1px] border-gray-200 bg-gray-50 lg:justify-around">
        {/* burger */}
        <div className="p-2">
          <VscThreeBars className="text-2xl text-gray-600" />
        </div>
        {/* logo / title */}
        <span className="text-xl font-thin">Ultimate Blog App</span>
        {/* nav actions */}
        <div className="flex items-center gap-4 p-2">
          <div>
            <FaRegBell className="text-xl" />
          </div>
          <div>
            <div className="h-5 w-5 rounded-full bg-gray-600" />
          </div>
          <button className="flex items-center space-x-1 rounded-md border border-gray-200 px-2 py-1 transition hover:border-gray-400 hover:text-gray-800">
            <span className="text-sm">Write</span>
            <RiFileEditLine className="text-xl" />
          </button>
        </div>
      </header>
      {/* main */}
      <section className="grid h-full  w-full  grid-cols-1 place-items-center md:grid-cols-12">
        <main className="col-span-8 h-full w-full border-r border-gray-300 bg-red-300 px-4 py-10 lg:px-20">
          <div className="flex w-full flex-col space-y-4 ">
            <div className="flex space-x-4 bg-yellow-500">
              {/* search input */}
              <label
                className="relative ml-4 w-full rounded-3xl border border-gray-800"
                htmlFor="search"
              >
                <FaSearch className="absolute left-1 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="  h-full w-full rounded-3xl px-4 py-2 pl-6 text-sm outline-none placeholder:text-sm"
                  placeholder="Search..."
                />
              </label>
              {/* tags and topics */}
              <div className="flex w-full items-center justify-end bg-green-300">
                <div>mt topics</div>
                <div className="flex space-x-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      className="rounded-3xl bg-gray-200/50 px-4 py-2"
                      key={i}
                    >
                      tag{i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between border-b border-gray-300 pb-8">
              <div>articles</div>
              <div>
                <button className="flex items-center space-x-2 rounded-3xl border border-gray-800 px-4 py-1.5 font-semibold">
                  <div>floowing</div>
                  <div>
                    <IoIosArrowDown className="text-xl" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col space-y-4 ">
            {Array.from({ length: 4 }).map((_, i) => (
              <>
                <div
                  key={i}
                  className="group my-8 flex flex-col border-b border-gray-300 p-5 pb-8 last:border-none"
                >
                  {/* author details */}
                  <div className="flex items-center gap-2">
                    {/* image */}
                    <div className="h-8 w-8 rounded-full bg-gray-600"></div>
                    {/*  name */}
                    <div>
                      <p className=" font-semibold">
                        Cassius Reynolds &#x2002; 22 Dec. 2022
                      </p>
                      <p className="text-sm">Founder, teacher & developer</p>
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 lg:h-40">
                    {/* left side CONTENT */}
                    <div className="col-span-8 flex flex-col space-y-2">
                      <p className="text-2xl font-bold decoration-indigo-600 group-hover:underline">
                        Lorem ipsum dolor sit amet consecteor excepturi
                      </p>
                      <p className="break-normal text-sm text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Provident ullam, adipisci blanditiis laudantium soluta
                        quisquam asperiores sed exercitationem voluptatibus
                        magnam.Lorem ipsum dolor sit amet cidunt eum aperiam
                        cumque error excepturi
                      </p>
                    </div>
                    {/* rightr side IMAGE */}
                    <div className="col-span-4 h-full w-full transform rounded-xl bg-gray-500 transition duration-200 hover:scale-105 hover:shadow-xl"></div>
                  </div>
                </div>
                {/* tags and topics */}
                <div className="flex w-full items-center justify-end bg-green-300">
                  <div>mt topics</div>
                  <div className="flex items-center space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div
                        className="rounded-2xl bg-gray-200/50 px-4 py-2"
                        key={i}
                      >
                        tag{i}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ))}
          </div>
        </main>
        <aside className="col-span-4 h-full w-full bg-blue-300">
          this is used for side bar
        </aside>
      </section>
    </div>
  );
};
export default HomePage;
