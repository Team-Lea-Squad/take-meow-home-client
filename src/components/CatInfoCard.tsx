import React from "react";
import Image from "next/image";
// import { Status } from "@/enum/AdoptionStatus";

interface CatInfoCardProps {
  time: string;
  catName: string;
  userName: string;
  status: string;
  onClick?: () => void;
}

const CatInfoCard = ({
  time = "12:00",
  catName = "로로",
  userName = "레아",
  status = "분양 예정",
  onClick
}: CatInfoCardProps) => {
  return (
    <div
      className="flex p-2 text-paragraph-120-R items-center w-full gap-4 mt-2 cursor-pointer"
      onClick={onClick}
    >
      <p className="text-paragraph-120-B text-black">{time}</p>
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2 items-center text-caption-120-R">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-background-chips">
            <Image
              src={"/logo-image.svg"}
              alt="default-image"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gpa-2">
            <p className="text-caption-120-B">{catName}</p>
            <p>{userName}</p>
          </div>
        </div>
        <div className="text-caption-100-B py-1 px-2 bg-background-chips rounded-lg">
          {status}
        </div>
      </div>
    </div>
  );
};

export default CatInfoCard;
