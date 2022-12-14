import Image from "next/image";
import { useState } from "react";

type Props = {};

const Navbar = (Props: Props) => {
  const [darkToggle, setDarkToggle] = useState(false);

  return (
    <nav
      className="flex relative xl:flex-col  justify-center items-center  xl:w-1/12 xl:h-screen w-screen bg-dark-byzantine-blue rounded-tr-3xl"
      data-testid="navbar"
    >
      <div className="h-2/12 absolute top-0  w-full h-32 flex flex-col justify-center items-center rounded-tr-3xl rounded-br-3xl bg-medium-slate-blue ">
        <div className="h-1/2  w-full"></div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={50}
          height={50}
          className="absolute"
        />
        <div className="h-1/2 bg-tropical-indigo w-full rounded-br-3xl rounded-tl-3xl"></div>
      </div>
      <button className="h-1/2 flex justify-center items-end">
        {/* show moon when light mode is enabled  */}
        {!darkToggle && (
          <Image
            src="/images/icon-moon.svg"
            alt="Dark Mode Button Icon"
            height={30}
            width={30}
            className="rounded-full"
            onClick={() => setDarkToggle(true)}
          />
        )}
        {/* show sun when dark mode is enabled  */}
        {darkToggle && (
          <Image
            src="/images/icon-sun.svg"
            alt="Light Mode Button Icon"
            height={30}
            width={30}
            className="rounded-full"
            onClick={() => setDarkToggle(false)}
          />
        )}
      </button>
      <div className="h-1/6 absolute bottom-0 border-t-[0.5px] border-[#494E6E] w-full flex justify-center items-center">
        <Image
          src="/images/image-avatar.jpg"
          alt="Profile Picture"
          height={50}
          width={50}
          className="rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;
