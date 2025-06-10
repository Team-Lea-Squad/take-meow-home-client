export interface ScheduleData {
  id: number;
  time: string;
  catName: string;
  userName: string;
  status: string;
  age: number;
  gender: "남" | "여";
  neutered: boolean;
  img: string[];
}

export const scheduleData: ScheduleData[] = [
  {
    id: 1,
    time: "10:00",
    catName: "로로",
    userName: "레아",
    status: "분양 예정",
    age: 2,
    gender: "여",
    neutered: true,
    img: ["/img/cat1.jpeg", "/img/cat2.jpg", "/img/cat3.jpeg"]
  },
  {
    id: 2,
    time: "14:30",
    catName: "나비",
    userName: "우희",
    status: "상담 완료",
    age: 1,
    gender: "남",
    neutered: false,
    img: ["/img/cat1.jpeg", "/img/cat2.jpg", "/img/cat3.jpeg"]
  },
  {
    id: 3,
    time: "15:00",
    catName: "초코",
    userName: "지안",
    status: "입양 대기",
    age: 3,
    gender: "여",
    neutered: true,
    img: ["/img/cat1.jpeg", "/img/cat2.jpg", "/img/cat3.jpeg"]
  },
  {
    id: 4,
    time: "13:00",
    catName: "까미",
    userName: "빈",
    status: "입양 대기",
    age: 8,
    gender: "여",
    neutered: true,
    img: ["/img/cat1.jpeg", "/img/cat2.jpg", "/img/cat3.jpeg"]
  }
];

export const getScheduleById = (id: number): ScheduleData | undefined => {
  return scheduleData.find((schedule) => schedule.id === id);
};

export const getScheduleDetails = (id: number) => {
  const schedule = getScheduleById(id);
  if (!schedule) return null;

  return {
    time: schedule.time,
    catName: schedule.catName,
    userName: schedule.userName,
    status: schedule.status,
    age: schedule.age,
    gender: schedule.gender,
    neutered: schedule.neutered,
    img: schedule.img
  };
};
