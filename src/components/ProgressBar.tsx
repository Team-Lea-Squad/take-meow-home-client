import React from "react";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressBar = ({ totalSteps, currentStep }: ProgressBarProps) => {
  const percent = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-6">
      <div
        className="h-full bg-primary transition-all duration-500"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
};

export default ProgressBar;
