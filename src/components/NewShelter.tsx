import React from "react";
import Image from "next/image";

const NewShelter = () => {
  const shelterList = [
    {
      id: 1,
      name: "입양센터 아름품",
      address: "서울 마포구 잔다리로 122 카라 더불어숨센터 2F",
      registeredCats: 5,
      imgSrc: "/img/shelter1.jpg"
    },
    {
      id: 2,
      name: "나비야 사랑해",
      address: "서울 강동구 성내로 38",
      registeredCats: 8,
      imgSrc: "/img/shelter1.jpg"
    },
    {
      id: 3,
      name: "용인시 동물보호센터",
      address: "경기도 용인시 처인구 포곡읍",
      registeredCats: 12,
      imgSrc: "/img/shelter1.jpg"
    },
    {
      id: 4,
      name: "팅커벨 프로젝트",
      address: "서울 강동구 천호대로 1139-2",
      registeredCats: 3,
      imgSrc: "/img/shelter1.jpg"
    },
    {
      id: 5,
      name: "고양이 정원",
      address: "서울 강서구 개화동로19길 18",
      registeredCats: 7,
      imgSrc: "/img/shelter1.jpg"
    }
  ];

  return (
    <div className="flex flex-col">
      <p className="text-title-120-B">신규 보호소 소식</p>
      <div className="flex flex-col gap-2">
        {shelterList.map((shelter) => (
          <div
            key={shelter.id}
            className="flex px-2 items-center gap-2 h-[96px]"
          >
            <Image
              src={shelter.imgSrc}
              alt="shelter-image"
              width={80}
              height={80}
              className="w-[80px] h-[80px] min-w-[80px] rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-between w-full h-[60px]">
              <div className="flex flex-col gap-1">
                <p className="text-paragraph-120-B">{shelter.name}</p>
                <p className="text-paragraph-120-R">{shelter.address}</p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icons/cat.svg"
                  alt="cat-icon"
                  width={20}
                  height={20}
                />
                <p className="text-caption-120-B text-primary2">
                  {shelter.registeredCats} 등록
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewShelter;
