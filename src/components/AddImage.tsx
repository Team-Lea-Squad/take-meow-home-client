"use client";
import React, { useState } from "react";
import Image from "next/image";

const AddImage = ({ label }: { label: string }) => {
  const [media, setMedia] = useState<
    { type: "image" | "video"; src: string }[]
  >([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    fileArray.forEach((file) => {
      const fileType = file.type.startsWith("video") ? "video" : "image";

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setMedia((prev) => [
            ...prev,
            { type: fileType, src: reader.result as string }
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-paragraph-120-B">{label}</p>
      <div className="flex gap-3  mb-20">
        <div className="w-40 h-40 border rounded-lg flex flex-col justify-center items-center border-line-medium text-body-120-R text-text-lite gap-2 cursor-pointer relative overflow-hidden shrink-0">
          <p>사진 · 영상 추가</p>
          <Image
            src="/icons/add-image.svg"
            alt="add-image"
            width={40}
            height={40}
          />
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={handleUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {media.map((item, idx) => (
            <div
              key={idx}
              className="w-40 h-40 rounded-lg overflow-hidden shrink-0"
              style={{ minWidth: "160px", minHeight: "160px" }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={`uploaded-${idx}`}
                  width={160}
                  height={160}
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddImage;
