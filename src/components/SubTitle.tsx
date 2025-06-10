import React from "react";

interface SubTitleProps {
  subTitle?: string;
}

const SubTitle = ({ subTitle }: SubTitleProps) => {
  return (
    <div className="text-paragraph-150-B text-text-black py-2">{subTitle}</div>
  );
};

export default SubTitle;
