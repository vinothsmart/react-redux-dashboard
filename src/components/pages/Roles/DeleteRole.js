import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { deleteRole } from "../../../actions";

const DeleteRole = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = useCallback(() => {
    dispatch(deleteRole(id));
  }, [dispatch, id]);
  return (
    <span onClick={handleDelete} className="material-icons btn-danger">
      remove_circle
    </span>
  );
};

export default DeleteRole;
