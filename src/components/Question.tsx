import React from "react";

interface SubTitleProps {
  subTitle?: string;
}

export const SubTitle = ({ subTitle }: SubTitleProps) => {
  return (
    <div className="text-paragraph-150-B text-text-black py-2">{subTitle}</div>
  );
};

export const Question = ({ subTitle }: SubTitleProps) => {
  return (
    <div className="text-paragraph-120-B text-text-black py-2">{subTitle}</div>
  );
};
