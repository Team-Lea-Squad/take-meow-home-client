"use client";

import React, { useState } from "react";
import BottomSheet from "./BottomSheet";

export default function BottomSheetWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <BottomSheet isOpen={open} onClose={() => setOpen(false)}>
        <div className="px-6 pb-6">
          <h2 className="text-lg font-bold">서비스 이용약관 동의</h2>

          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <span className="ml-2 font-medium">약관 전체동의</span>
            </li>
            <hr />
            {[
              "(필수) 서비스 이용약관",
              "(필수) 개인정보 수집 및 이용",
              "(선택) 마케팅 정보 활용"
            ].map((text) => (
              <li key={text} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="ml-2">{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </BottomSheet>
    </div>
  );
}
