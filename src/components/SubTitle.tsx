import React from "react";

interface SubTitleProps {
  subTitle?: string;
}

export const SubTitle = ({ subTitle }: SubTitleProps) => {
  return (
    <div className="text-paragraph-150-B text-text-black py-2">{subTitle}</div>
  );
};

export const QuestionTitle = ({ subTitle }: SubTitleProps) => {
  return <div className="text-body-150-B text-text-black py-2">{subTitle}</div>;
};
