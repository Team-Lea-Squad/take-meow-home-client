"use client";
import React from "react";
import { useRouter } from "next/navigation";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import Image from "next/image";
import CommonButton from "@/components/CommonButton";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <MainTitle mainTitle={mainTitles.registrationComplete} />
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/img/register-completed.svg"
          alt="register-completed"
          width={150}
          height={367}
        />
        <CommonButton title="확인" />
        <div className="flex flex-col items-center justify-center text-paragraph-120-R h-12">
          <p
            className="text-paragraph-120-R text-text-dark underline decoration-text-dark underline-offset-2"
            onClick={() => router.push("/")}
          >
            일반 유저로 서비스 둘러보기
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
