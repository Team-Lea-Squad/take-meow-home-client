export interface ScheduleData {
  id: number;
  time: string;
  catName: string;
  userName: string;
  status: string;
  age: number;
  gender: "남" | "여";
  neutered: boolean;
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
    neutered: true
  },
  {
    id: 2,
    time: "14:30",
    catName: "나비",
    userName: "민지",
    status: "상담 완료",
    age: 1,
    gender: "남",
    neutered: false
  },
  {
    id: 3,
    time: "16:00",
    catName: "초코",
    userName: "지훈",
    status: "입양 대기",
    age: 3,
    gender: "여",
    neutered: true
  }
];
