import React from "react";
import Image from "next/image";

const AddButler = () => {
  return (
    <div className="flex flex-col gap-[10px] p-5 bg-primary2 rounded-2xl">
      <p className="flex flex-col whitespace-pre text-white text-paragraph-150-M">
        {`집사의 생활을 먼저 알려주면, \n더 찰떡인 냥이를 소개할 수 있어요`}
      </p>
      <p className="flex text-white text-paragraph-150-B items-center">
        예비집사 등록하기
        <Image
          src="/icons/arrow-right-white.svg"
          alt="arrow-right-button"
          width={20}
          height={20}
        />
      </p>
    </div>
  );
};

export default AddButler;
