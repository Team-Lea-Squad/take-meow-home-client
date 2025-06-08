"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const headerTitle = (() => {
    if (pathname === "/") return "";
    if (pathname.startsWith("/")) return "";
    if (pathname.startsWith("/")) return "";
    return "안녕하세요";
  })();

  return (
    <div className="w-full h-16 bg-background-white text-text-dark p-600 flex justify-between items-center">
      <div className="flex gap-400 text-body-120-M items-center">
        <Image
          src="/icons/header-left.svg"
          alt="left-button"
          width={24}
          height={24}
          style={{ height: "24px" }}
          onClick={() => router.back()}
        />
        <p>{headerTitle}</p>
      </div>
      <Image
        src="/icons/close.svg"
        alt="close-icon"
        width={24}
        height={24}
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
      />
    </div>
  );
};

export default Header;
