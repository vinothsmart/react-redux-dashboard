import { Link } from "react-router-dom";
import DeleteRole from "./DeleteRole";

const RoleList = ({ rolesData }) => {
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
        {rolesData.map((role) => {
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
