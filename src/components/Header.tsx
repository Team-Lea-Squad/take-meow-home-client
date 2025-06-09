"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/login";

  const headerTitle = (() => {
    if (isLogin) return "";
    if (pathname === "/") return "";
    return "";
  })();

  return (
    <div className="w-full h-16 bg-background-white text-text-dark p-600 flex justify-between items-center fixed top-0 z-3">
      <div className="flex gap-400 text-body-120-M items-center">
        {!isLogin && (
          <Image
            src="/icons/header-left.svg"
            alt="left-button"
            width={24}
            height={24}
            style={{ height: "24px", cursor: "pointer" }}
            onClick={() => router.back()}
          />
        )}
        <p>{headerTitle}</p>
      </div>
      {!isLogin && (
        <Image
          src="/icons/close.svg"
          alt="close-icon"
          width={24}
          height={24}
          style={{ cursor: "pointer" }}
          onClick={() => router.push("/")}
        />
      )}
    </div>
  );
};

export default Header;
