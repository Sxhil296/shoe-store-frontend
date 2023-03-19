import Link from "next/link";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translation-y-0");
  const [lastScrollY, setScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transform duration-300 ${show}`}
    >
      <Wrapper>
        <Link href="/">
          <img
            src="/assets/logo.svg"
            alt="logo svg"
            className="w-[40px] md:w-[60px]"
          />
        </Link>
        <Menu />
      </Wrapper>
    </header>
  );
};

export default Header;
