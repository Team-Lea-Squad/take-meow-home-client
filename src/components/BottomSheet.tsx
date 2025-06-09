// components/BottomSheet.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheet({
  isOpen,
  onClose,
  children
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setTranslateY(0);
      document.body.style.overflow = "hidden";
    } else {
      setTranslateY(window.innerHeight);
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const onPointerUp = (e: React.PointerEvent) => {
    sheetRef.current?.releasePointerCapture(e.pointerId);
    if (translateY > 100) onClose();
    else setTranslateY(0);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose} />
      <div
        ref={sheetRef}
        className="fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-xl transition-transform"
        style={{ transform: `translateY(${translateY}px)` }}
        // onPointerDown={onPointerDown}
        // onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
      >
        <div className="w-12 h-1 bg-gray-300 rounded mx-auto my-2" />
        {children}
      </div>
    </>
  );
}
