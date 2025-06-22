"use client";

import React, { useState } from "react";
import Image from "next/image";

const NewCats = () => {
  const [likes, setLikes] = useState<{ [key: number]: boolean }>({});

  const toggleLike = (catId: number) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [catId]: !prevLikes[catId]
    }));
  };

  const catList = [
    {
      id: 1,
      name: "토토",
      gender: "여",
      age: "4살",
      shelter: "용인시 동물보호센터",
      imgSrc: "/img/cat1.jpeg"
    },
    {
      id: 2,
      name: "조랭이",
      gender: "남",
      age: "2살",
      shelter: "용인시 동물보호센터",
      imgSrc: "/img/cat1.jpeg"
    },
    {
      id: 3,
      name: "치즈",
      gender: "남",
      age: "1살",
      shelter: "용인시 동물보호센터",
      imgSrc: "/img/cat1.jpeg"
    },
    {
      id: 4,
      name: "나비",
      gender: "여",
      age: "3살",
      shelter: "용인시 동물보호센터",
      imgSrc: "/img/cat1.jpeg"
    },
    {
      id: 5,
      name: "고등어",
      gender: "남",
      age: "5살",
      shelter: "용인시 동물보호센터",
      imgSrc: "/img/cat1.jpeg"
    }
  ];

  return (
    <div className=" w-full gap-4 flex flex-col">
      <p className="text-title-120-B">새로운 친구가 찾아왔어요</p>
      <div className="w-full overflow-x-auto hide-scrollbar">
        <div className="flex w-fit gap-4 pb-4">
          {catList.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col p-2 gap-2 rounded-2xl shadow-[4px_4px_20px_rgba(0,0,0,0.08)] w-[176px] flex-shrink-0"
            >
              <div className="relative">
                <Image
                  src={cat.imgSrc}
                  alt="cat-image"
                  width={160}
                  height={160}
                  className="w-[160px] h-[160px] rounded-xl object-cover"
                />
                <div
                  className="absolute bottom-2 right-2 rounded-full bg-black w-10 h-10 flex justify-center items-center cursor-pointer"
                  onClick={() => toggleLike(cat.id)}
                >
                  <Image
                    src={
                      likes[cat.id]
                        ? "/icons/like-heart-on.svg"
                        : "/icons/like-heart-off.svg"
                    }
                    alt="like-heart-off"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <div className="flex flex-col h-[50px] px-3 py-2 gap-1">
                <p className="text-paragraph-120-B">
                  {cat.name} {cat.gender} {cat.age}
                </p>
                <div className="text-paragraph-120-R">{cat.shelter}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCats;
