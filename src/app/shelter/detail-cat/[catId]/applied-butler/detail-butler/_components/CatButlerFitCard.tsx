"use client";
import React, { useState } from "react";
import Image from "next/image";
import CommonButton from "@/components/CommonButton";
import BottomSheet from "@/components/BottomSheet";
import BottomSheetContent from "@/components/BottomSheetContent";
import { useButlerStore } from "@/store/butlerStore";
import { useRouter } from "next/navigation";

const CatButlerFitCard = () => {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const setIsButlerSelected = useButlerStore(
    (state) => state.setIsButlerSelected
  );

  return (
    <div className="flex flex-col p-4 border border-line-lite rounded-lg gap-2">
      <p className="text-title-120-B text-text-black whitespace-pre">
        {`로로와 김혜원님의 \n적합도는 80% 입니다.`}
      </p>
      <p className="text-text-lite text-paragraph-120-R">
        고양이와 집사의 적합도가 평균보다 높은 편입니다.
      </p>
      <div className="flex flex-col gap-2 my-2">
        <div className="flex gap-1">
          <Image
            src="/icons/radio-on.svg"
            alt="radio-on-img"
            width={24}
            height={24}
          />
          <p>집사가 원하는 고양이 성향</p>
        </div>
        <div className="flex gap-1">
          <Image
            src="/icons/radio-on.svg"
            alt="radio-on-img"
            width={24}
            height={24}
          />
          <p>다묘 가정</p>
        </div>
        <div className="flex gap-1">
          <Image
            src="/icons/radio-off.svg"
            alt="radio-off-img"
            width={24}
            height={24}
          />
          <p>집에 있는 시간 많음</p>
        </div>
      </div>
      <CommonButton
        title="집사 채택하기"
        onClick={() => {
          setIsSheetOpen(true);
          setIsButlerSelected(true);
        }}
      />
      {isSheetOpen && (
        <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
          <BottomSheetContent
            title={
              "집사로 채택하면 취소가 어렵습니다. \n신중하게 채택해주세요."
            }
            buttonTitle="집사 채택하기"
            onClick={() => {
              setIsSheetOpen(false);
              router.push("/shelter/completed-butler");
            }}
          />
        </BottomSheet>
      )}
    </div>
  );
};

export default CatButlerFitCard;
