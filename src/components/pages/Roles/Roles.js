import { SeoTool } from "../../elements";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Roles = () => {
  const roles = useSelector((state) => state.role.roles);
  // console.log("roles", roles);
  return (
    <>
      <SeoTool title="Roles" />
      <div className="container">
        <div className="py-3">
          <div className="clearfix" style={{ padding: ".5rem" }}>
            <h1 className="float-start"> Roles List </h1>
            <Link to="roles/add">
              <button className="btn btn-danger float-end">Add Role</button>
            </Link>
          </div>
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
                      <Link to={`/roles/delete/${role.userRoleId}`}>
                        <span className="material-icons">remove_circle</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
