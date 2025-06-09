import React from "react";
import Image from "next/image";

const highlights = [
  {
    time: "12:00",
    animalName: "초코 여 10살",
    userName: "레아 여 30대",
    status: "진행중",
    image: "/logo-image.svg"
  },
  {
    time: "14:30",
    animalName: "보리 남 2살",
    userName: "우희 여 30대",
    status: "대기중",
    image: "/logo-image.svg"
  }
];

const TodayHighlightsCard = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-paragraph-150-B text-text-black py-2">
        오늘의 주요 일정
      </p>
      {highlights.map((item, idx) => (
        <div
          key={idx}
          className="flex p-2 text-paragraph-120-R items-center w-full gap-4"
        >
          <p className="text-paragraph-120-B text-black">{item.time}</p>
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2 items-center text-caption-120-R">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-background-chips">
                <Image
                  src={item.image}
                  alt="default-image"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col gpa-2">
                <p className="text-caption-120-B">{item.animalName}</p>
                <p>{item.userName}</p>
              </div>
            </div>
            <div className="text-caption-100-B py-1 px-2 bg-background-chips rounded-lg">
              {item.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodayHighlightsCard;
