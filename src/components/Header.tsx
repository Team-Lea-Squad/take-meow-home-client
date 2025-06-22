"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/login";
  const isHome = pathname === "/";

  const headerTitle = (() => {
    if (isLogin || isHome) return "";
    // if (pathname.startsWith("/onboarding")) return "추가 정보 입력";
    return "";
  })();

  return (
    <div className="w-full h-16 bg-background-white text-text-dark p-600 flex justify-between items-center fixed top-0 z-3">
      <div className="flex gap-400 text-body-120-M items-center">
        {!isLogin && !isHome && (
          <Image
            src="/icons/header-left.svg"
            alt="left-button"
            width={24}
            height={24}
            style={{ height: "24px", cursor: "pointer" }}
            onClick={() => router.back()}
          />
        )}
        {isHome ? (
          <Image
            src="/take-meow-home-logo.svg"
            alt="take meow home logo"
            width={69}
            height={18}
          />
        ) : (
          <p>{headerTitle}</p>
        )}
      </div>
      {!isLogin && !isHome && (
        <Image
          src="/icons/close.svg"
          alt="close-icon"
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      )}
      {isHome && (
        <div className="flex gap-1 h-5 text-body-120-M">
          알림
          <div className="rounded-full bg-red-600 w-[6px] h-[6px]"></div>
        </div>
      )}
    </div>
  );
};

export default Header;
