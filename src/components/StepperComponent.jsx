import React, { useState } from "react";
import Education from "./stepper/Education";
import UserDetails from "./stepper/UserDetails";
import JobDetails from "./stepper/JobDetails";
import TermsConditions from "./stepper/TermsConditions";

const StepperComponent = () => {
  const stepsConfig = [
    {
      id: 1,
      component: <UserDetails />,
      label: "User Details",
    },
    {
      id: 2,
      component: <Education />,
      label: "Education",
    },
    {
      id: 3,
      component: <JobDetails />,
      label: "Job Details",
    },
    {
      id: 4,
      component: <TermsConditions />,
      label: "Terms and Conditions",
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  return (
    <div className="flex flex-col gap-x-4">
      <div>
        {stepsConfig.map((step) => (
          <div className="flex">
            <div
              className={`h-20 w-20 m-3 ${step.id <= currentStep ? "bg-blue-500" : "bg-gray-300"} flex justify-center items-center`}
            >
              <span className="h-10 w-10 text-2xl text-white text-center">
                {step.id}
              </span>
            </div>
            <div>{step.label}</div>
          </div>
        ))}
      </div>
      <div>Fill this details</div>
      {stepsConfig.map((step) => (
        <div className="flex ">{currentStep === step.id && step.component}</div>
      ))}
      <button
        className={`bg-blue-500 rounded-lg p-2 w-40`}
        disabled={currentStep <= 1}
        onClick={handlePrevious}
      >
        Previous
      </button>
      <button
        className="bg-blue-500 rounded-lg p-2 w-40"
        disabled={currentStep === stepsConfig.length}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
};

export default StepperComponent;
