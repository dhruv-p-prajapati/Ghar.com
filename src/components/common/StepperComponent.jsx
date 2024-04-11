import React, { useEffect, useRef, useState } from "react";
import { STEPS } from "../../utils/constants";
import PropTypes from "prop-types";

const StepperComponent = ({ activeStep }) => {
  const [margins, setMargins] = useState({
    mLeft: 0,
    mRight: 0
  });
  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      mLeft: stepRef.current[0].offsetWidth / 2,
      mRight: stepRef.current[STEPS?.length - 1].offsetWidth / 2
    });
  }, [stepRef.current, STEPS.length]);

  const calcProgressBar = () => {
    return (activeStep / (STEPS.length - 1)) * 100;
  };

  const style = {
    width: `calc(100% - ${margins.mLeft + margins.mRight}px)`,
    marginLeft: `${margins.mLeft}px`,
    marginRight: `${margins.mRight}px`
  };

  return (
    <div className="flex justify-center mt-10 ">
      <div className="relative flex justify-between items-center w-[min(700px,85vw)]">
        {STEPS.map((step, index) => {
          return (
            <div key={step.label} ref={(ele) => (stepRef.current[index] = ele)} className={`flex flex-col items-center relative `}>
              <div
                className={`w-8 h-8 rounded-full  flex justify-center items-center mb-2 z-0
                 ${index === activeStep ? "bg-primary text-white" : index < activeStep ? "bg-success text-white" : "bg-white border border-black"}`}>
                {index >= activeStep ? index + 1 : <span>&#10003;</span>}
              </div>
              <div className="text-base md:text-lg">{step.label}</div>
            </div>
          );
        })}

        <div className={`absolute top-1/4 left-0 h-[1.5px] bg-primary -z-10`} style={style}>
          <div className="h-full bg-success duration-1000" style={{ width: `${calcProgressBar()}%` }}></div>
        </div>
      </div>
    </div>
  );
};

StepperComponent.prototypes = {
  activeStep: PropTypes.number.isRequired
};

export default StepperComponent;
