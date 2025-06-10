"use client";
import React, { useState } from "react";
import Image from "next/image";
import CommonButton from "./CommonButton";

const BottomSheetContent = () => {
  const [isAllAgree, setIsAllAgree] = useState(false);
  const [agreements, setAgreements] = useState({
    service: false,
    privacy: false,
    marketing: false
  });

  const handleAllAgree = () => {
    const newValue = !isAllAgree;
    setIsAllAgree(newValue);
    setAgreements({
      service: newValue,
      privacy: newValue,
      marketing: newValue
    });
  };

  const handleAgreement = (type: keyof typeof agreements) => {
    const newAgreements = {
      ...agreements,
      [type]: !agreements[type]
    };
    setAgreements(newAgreements);
    setIsAllAgree(Object.values(newAgreements).every((value) => value));
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="w-full p-600 items-center">
        <p className="text-title-120-B">서비스 이용약관</p>
      </div>
      <div className="flex flex-col justify-between h-full ">
        <div className="w-full py-800 px-600 items-center ">
          <div className="flex flex-col gap-4">
            <div
              className="text-body-120-B flex gap-2 items-center cursor-pointer"
              onClick={handleAllAgree}
            >
              <Image
                src={
                  isAllAgree ? "/icons/status-yes.svg" : "/icons/status-no.svg"
                }
                alt="check-icon"
                width={24}
                height={24}
              />
              <p>약관 전체동의</p>
            </div>
            <div className="h-[1px] bg-gray-300 w-full" />
            <div className="flex flex-col gap-1">
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => handleAgreement("service")}
              >
                <Image
                  src={
                    agreements.service
                      ? "/icons/status-yes.svg"
                      : "/icons/status-no.svg"
                  }
                  alt="check-icon"
                  width={24}
                  height={24}
                />
                <div className="flex gap-1 py-2">
                  <p className="text-primary">(필수)</p>
                  <p>서비스 이용약관</p>
                </div>
              </div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => handleAgreement("privacy")}
              >
                <Image
                  src={
                    agreements.privacy
                      ? "/icons/status-yes.svg"
                      : "/icons/status-no.svg"
                  }
                  alt="check-icon"
                  width={24}
                  height={24}
                />
                <div className="flex gap-1 py-2">
                  <p className="text-primary">(필수)</p>
                  <p>개인정보 수집 및 이용</p>
                </div>
              </div>
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => handleAgreement("marketing")}
              >
                <Image
                  src={
                    agreements.marketing
                      ? "/icons/status-yes.svg"
                      : "/icons/status-no.svg"
                  }
                  alt="check-icon"
                  width={24}
                  height={24}
                />
                <div className="flex gap-1 py-2">
                  <p className="text-primary">(선택)</p>
                  <p>마케팅 정보 활용</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-600">
          <CommonButton
            title="시작하기"
            isDisabled={!agreements.service || !agreements.privacy}
          />
        </div>
      </div>
    </div>
  );
};

export default BottomSheetContent;
