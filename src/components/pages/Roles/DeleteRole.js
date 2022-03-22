import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteRole } from "../../../actions";

const DeleteRole = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = useCallback(() => {
    dispatch(deleteRole(id));
  }, [dispatch, id]);
  return (
    <Link onClick={handleDelete}>
      <span className="material-icons btn-danger">remove_circle</span>
    </Link>
  );
};

export default DeleteRole;
