"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAddressStore } from "@/store/addressStore";

const Address = () => {
  const router = useRouter();
  const selectedAddress = useAddressStore((s) => s.selectedAddress);
  const [detailAddress, setDetailAddress] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-[2px] text-paragraph-120-B text-text-dark">
        <p>주소</p>
        <p className="text-text-error">*</p>
      </div>
      <div className="flex flex-col w-full border border-line-medium rounded-lg overflow-hidden">
        <div
          className="flex items-center w-full p-600 border-b border-line-medium justify-between cursor-pointer gap-2"
          onClick={() => router.push("/shelter/register/find-address")}
        >
          <div className="w-full text-text-lite">
            {selectedAddress || "보호소 주소 검색"}
          </div>

          <Image
            src="/icons/search.svg"
            alt="search-icon"
            width={24}
            height={24}
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
