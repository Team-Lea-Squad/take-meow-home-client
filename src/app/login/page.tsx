"use client";
import React, { useState } from "react";
import Bottom from "./_components/Bottom";
import { useRouter } from "next/navigation";
import BottomSheet from "@/components/BottomSheet";
import BottomSheetContent from "@/components/BottomSheetContentAgree";

const Page = () => {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex flex-col justify-between">
      <div className="h-[452px] flex justify-center items-center">
        <img src="/temporarily-logo.svg" alt="logo" />
      </div>
      <div className="flex flex-col gap-3 items-center">
        <img
          src="/button-kakao.svg"
          alt="button"
          width="100%"
          height={48}
          onClick={() => setIsSheetOpen(true)}
          style={{ cursor: "pointer" }}
        />
        <img
          src="/button-google.svg"
          alt="button"
          width="100%"
          height={48}
          onClick={() => setIsSheetOpen(true)}
          style={{ cursor: "pointer" }}
        />
        <div className="flex flex-col items-center justify-center text-paragraph-120-R h-12">
          <p
            className="text-paragraph-120-R text-text-dark underline decoration-text-dark underline-offset-2"
            onClick={() => router.push("/shelter/register")}
          >
            보호소 회원이신가요?
          </p>
        </div>
        <Bottom />
      </div>
      {isSheetOpen && (
        <BottomSheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)}>
          <BottomSheetContent />
        </BottomSheet>
      )}
    </div>
  );
};

export default Page;
