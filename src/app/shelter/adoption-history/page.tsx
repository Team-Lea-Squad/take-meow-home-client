"use client";

import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import BottomButton from "@/components/BottomButton";
import { useAdoptionStore } from "@/store/adoptionStore";
import VisitScheduleCard from "@/components/VisitScheduleCard";
import { useVisitStore } from "@/store/visitStore";
import { motion } from "framer-motion";

const Page = () => {
  const isAdopted = useAdoptionStore((state) => state.isAdopted);
  const setIsAdopted = useAdoptionStore((state) => state.setIsAdopted);
  const adoptedTime = useAdoptionStore((state) => state.adoptedTime);
  const setAdoptedTime = useAdoptionStore((state) => state.setAdoptedTime);
  const { isAccepted } = useVisitStore();

  const handleAdopt = () => {
    setIsAdopted(true);
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    setAdoptedTime(`${hh}:${mm}`);
  };

  const today = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const formattedDate = `${today.getFullYear()}/${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${today.getDate().toString().padStart(2, "0")} ${
    days[today.getDay()]
  }`;

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <MainTitle mainTitle={mainTitles.adoptionHistory} />
      <motion.div
        className="p-4 bg-background-chips rounded-lg"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <p>집사 김혜원</p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
      >
        <p className="text-paragraph-150-B">2025/05/31 토</p>
        <p>김혜원님이 루미의 집사로 채택되었습니다.</p>
      </motion.div>
      <motion.div
        className="flex flex-col gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <p className="text-paragraph-150-B">2025/06/10 화</p>
        <p>김혜원님이 방문일을 선택하였습니다.</p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        <VisitScheduleCard />
      </motion.div>
      {isAccepted && (
        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <p className="text-paragraph-150-B">2025/06/10 화</p>
          <p>김혜원님의 방문일을 수락하였습니다.</p>
          <div className="p-2 bg-background-chips rounded-lg text-paragraph-120-B">
            김혜원님의 방문예정일은 2025/06/10 화요일 오후 18:00 입니다.
          </div>
        </motion.div>
      )}

      {isAdopted && isAccepted && (
        <motion.div
          className="flex flex-col gap-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <p className="text-paragraph-150-B">
            {formattedDate} {adoptedTime && <span>{adoptedTime}</span>}
          </p>
          <p>🎉 김혜원님의 분양이 완료되었습니다.</p>
        </motion.div>
      )}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <BottomButton
          buttonTitle="분양 완료"
          disabled={isAdopted}
          onClick={handleAdopt}
        />
      </motion.div>
    </div>
  );
};

export default Page;
