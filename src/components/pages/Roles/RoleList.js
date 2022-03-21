import { Link } from "react-router-dom";

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
                <Link to={`/roles/delete/${role.userRoleId}`}>
                  <span className="material-icons">remove_circle</span>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default RoleList;
