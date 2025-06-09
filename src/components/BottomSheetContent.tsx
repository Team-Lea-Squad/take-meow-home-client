"use client";
import React from "react";
import Image from "next/image";

const BottomSheetContent = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full p-600 items-center h-14">
        <p className="text-title-120-B">서비스 이용약관</p>
      </div>
      <div className="w-full py-800 px-600 items-center flex-1">
        <div className="flex flex-col gap-4">
          <div className="text-body-120-B">약관 전체동의</div>
          <div className="h-[1px] bg-gray-300 w-full" />
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Image
                src="/icons/status-no.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
              <div className="flex gap-1 py-2">
                <p className="text-primary">(필수)</p>
                <p>서비스 이용약관</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                src="/icons/status-no.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
              <div className="flex gap-1 py-2">
                <p className="text-primary">(필수)</p>
                <p>개인정보 수집 및 이용</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Image
                src="/icons/status-no.svg"
                alt="check-icon"
                width={24}
                height={24}
              />
              <div className="flex gap-1 py-2">
                <p className="text-primary">(필수)</p>
                <p>마케팅 정보 활용</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomSheetContent;
