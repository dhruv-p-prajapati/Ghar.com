import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

const DeleteConfirmationUserModel = ({ showDeleteConfirmation, setShowDeleteConfirmation, handleDeleteUser, userToBeDeleted }) => {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-screen h-screen z-50 bg-[rgba(0,0,0,0.2)]">
      <div className="z-50 bg-slate-50 px-5 py-5 w-[min(90%,450px)] rounded-md relative">
        <button className="absolute top-3 right-3 text-2xl" onClick={() => setShowDeleteConfirmation(!showDeleteConfirmation)}>
          <AiOutlineClose />
        </button>
        <h2 className="text-2xl font-medium">Delete Confirmation</h2>
        <hr className="h-2 mt-3" />
        <p className={`mt-4 text-base font-medium  rounded-md text-white bg-danger p-2 `}>
          Are you sure want to delete user with id {userToBeDeleted} ?
        </p>
        <div className="flex w-full mx-auto justify-end gap-5 mt-4">
          <Button variant="secondaryOutline" onClick={() => setShowDeleteConfirmation(!showDeleteConfirmation)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleDeleteUser(userToBeDeleted);
              setShowDeleteConfirmation(!showDeleteConfirmation);
            }}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

DeleteConfirmationUserModel.propTypes = {
  showDeleteConfirmation: PropTypes.bool.isRequired,
  setShowDeleteConfirmation: PropTypes.func.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  userToBeDeleted: PropTypes.string.isRequired
};

export default DeleteConfirmationUserModel;
