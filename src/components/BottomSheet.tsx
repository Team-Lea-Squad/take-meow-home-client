"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children
}) => {
  const sheetRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const startY = useRef<number | null>(null);
  const lastHeight = useRef(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(417);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (startY.current === null) return;
    const diff = startY.current - e.clientY;
    const newHeight = Math.min(
      Math.max(lastHeight.current + diff, 417),
      window.innerHeight
    );
    setHeight(newHeight);
  }, []);

  const handlePointerUp = useCallback(
    (e: PointerEvent) => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
      if (height < 100) onClose();
      startY.current = null;
    },
    [height, onClose, handlePointerMove]
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    startY.current = e.clientY;
    lastHeight.current = height;
    document.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("pointerup", handlePointerUp);
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose} />
      <div
        ref={sheetRef}
        className="fixed left-0 right-0 bottom-0 bg-white rounded-t-2xl shadow-xl"
        style={{ height, touchAction: "none" }}
      >
        <div
          className="w-12 h-1 bg-gray-300 rounded mx-auto my-2 cursor-row-resize"
          onPointerDown={handlePointerDown}
        />
        {children}
      </div>
    </>
  );
};

export default BottomSheet;
