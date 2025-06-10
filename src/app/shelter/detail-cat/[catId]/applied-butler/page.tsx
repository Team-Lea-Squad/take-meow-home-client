"use client";
import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import { useCatStore } from "@/store/catStore";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const catName = useCatStore((state) => state.catName);

  return (
    <div>
      <MainTitle mainTitle={mainTitles.appliedAdopter} catName={catName} />
      <div className="flex flex-col gap-4 pt-4">
        <div
          className="w-full bg-background-chips h-[100px] rounded-lg p-4"
          onClick={() => {
            router.push(`/shelter/detail-butler/1`);
          }}
        >
          <p>집사 김혜원</p>
        </div>
        <div className="w-full bg-background-chips h-[100px] rounded-lg p-4">
          <p>집사 김혜원</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
