import React from "react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import handleVerifyUnverify from "../../utils/commonFunctions/handleVerifyUnverify";
import { useNavigate } from "react-router-dom";

const ConfirmVerifyUnverifyModel = ({ showConfirmationModel, setShowConfirmationModel, status, property, rerender, setRerender }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-screen h-screen z-50 bg-[rgba(0,0,0,0.2)]">
      <div className="z-50 bg-slate-50 px-5 py-5 w-[min(90%,450px)] rounded-md relative">
        <button className="absolute top-3 right-3 text-2xl" onClick={() => setShowConfirmationModel(!showConfirmationModel)}>
          <AiOutlineClose />
        </button>
        <h2 className="text-2xl font-medium">{status === true ? "Verify" : "Unverify"} Confirmation</h2>
        <hr className="h-2 mt-3" />
        <p className={`mt-4 text-base font-medium p-5 rounded-md text-white ${status === true ? "bg-primary" : "bg-danger"}`}>
          Are you sure you want to {status === true ? "Verify" : "Unverify"} {property.name} property ?
        </p>
        <div className="flex w-full mx-auto justify-end gap-5 mt-5">
          <Button variant="secondaryOutline" onClick={() => setShowConfirmationModel(!showConfirmationModel)}>
            Cancel
          </Button>
          <Button
            variant={status === true ? "primary" : "danger"}
            onClick={() => {
              handleVerifyUnverify(status, property);
              setShowConfirmationModel(!showConfirmationModel);
              if (setRerender) {
                setRerender(!rerender);
              }
            }}>
            {status === true ? "Verify" : "Unverify"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmVerifyUnverifyModel;
