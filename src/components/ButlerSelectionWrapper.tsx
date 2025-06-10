import React from "react";
import Image from "next/image";

interface ButlerData {
  id: number;
  dDay: string;
  name: string;
  gender: string;
  age: number;
}

const butlerData: ButlerData[] = [
  {
    id: 1,
    dDay: "D-day",
    name: "로로",
    gender: "여",
    age: 3
  },
  {
    id: 2,
    dDay: "D-1",
    name: "봄",
    gender: "남",
    age: 2
  },
  {
    id: 3,
    dDay: "D-2",
    name: "여름",
    gender: "여",
    age: 1
  },
  {
    id: 4,
    dDay: "D-3",
    name: "가을",
    gender: "남",
    age: 4
  },
  {
    id: 5,
    dDay: "D-4",
    name: "겨울",
    gender: "여",
    age: 2
  }
];

const ButlerSelectionWrapper = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-paragraph-150-B text-text-black py-2">
        집사 선정이 필요해요.
      </p>
      <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {butlerData.map((butler) => (
          <div
            key={butler.id}
            className="bg-background-chips w-40 h-40 rounded-lg flex-shrink-0 relative p-2"
          >
            <div className="flex flex-col gap-1">
              <div className="text-caption-120-B">{butler.dDay}</div>
              <div className="text-caption-120-B">
                {butler.name} {butler.gender} {butler.age}살
              </div>
            </div>
            <Image
              src="/logo-image.svg"
              alt="logo-image"
              fill
              className="object-contain p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButlerSelectionWrapper;
