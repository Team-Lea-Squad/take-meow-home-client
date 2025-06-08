"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Address = () => {
  const router = useRouter();
  const [detailAddress, setDetailAddress] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-[2px] text-paragraph-120-B text-text-dark">
        <p>주소</p>
        <p className="text-text-error">*</p>
      </div>
      <div className="flex flex-col w-full border border-line-medium rounded-lg overflow-hidden">
        <div className="flex items-center w-full p-600 border-b border-line-medium justify-between cursor-pointer">
          <div>서울 성동구 행당동 318-36</div>
          {/** 주소 검색 router 이동 다시 해야됨*/}
          <Image
            src="/icons/search.svg"
            alt="search-icon"
            width={24}
            height={24}
            onClick={() => router.push("/")}
          />
        </div>
        <input
          type="text"
          placeholder="상세주소"
          value={detailAddress}
          onChange={(e) => setDetailAddress(e.target.value)}
          className="
            w-full p-600
            placeholder:text-text-lite
            text-text-dark
            focus:outline-none
          "
        />
      </div>
    </div>
  );
};

export default Address;
