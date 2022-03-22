import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRoles } from "../../../actions";
import DeleteRole from "./DeleteRole";

const RoleList = () => {
  const dispatch = useDispatch();

  const roles = useSelector((state) => state.role.roles);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  return (
    <table className="table table-shadow table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Role</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => {
          return (
            <tr key={role.userRoleId}>
              <th scope="row">{role.userRoleId}</th>
              <td>{role.userRole}</td>
              <td>
                <Link to={`/roles/edit/${role.userRoleId}`}>
                  <span className="material-icons">edit</span>
                </Link>
                <DeleteRole id={role.userRoleId} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RoleList;
