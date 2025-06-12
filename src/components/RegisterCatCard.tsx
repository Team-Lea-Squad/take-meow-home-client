"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const RegisterCatCard = () => {
  const router = useRouter();
  const [hasRegisteredCats, setHasRegisteredCats] = useState(false);

  return (
    <div className="rounded-lg p-500 bg-background-chips gap-2 flex flex-col">
      {!hasRegisteredCats && (
        <p
          className="whitespace-pre text-text-black text-paragraph-120-R"
          onClick={() => {
            router.push("");
          }}
        >{`등록된 고양이가 없습니다. \n고양이를 등록해주세요.`}</p>
      )}

      <div
        className="text-text-black text-paragraph-150-B flex items-center"
        onClick={() => {
          router.push("/shelter/register-cat");
        }}
      >
        고양이 등록하기
        <Image
          src="/icons/arrow-right.svg"
          alt="right-button"
          width={18}
          height={18}
        />
      </div>
    </div>
  );
};

export default RegisterCatCard;
