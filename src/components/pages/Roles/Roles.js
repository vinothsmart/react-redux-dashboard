import { SeoTool } from "../../elements";
// import { Link } from "react-router-dom";

export const Roles = () => {
  return (
    <>
      <SeoTool title="Roles" />
      <div className="container">
        <div className="py-4">
          <h1> Roles List </h1>
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
            {/* {roles.map((role) => {
              <tr>
                <th scope="row">{role.id}</th>
                <td>{role.name}</td>
                <td>
                  <Link to={`/contacts/edit/${role.id}`}>
                    <button className="btn btn-primary" type="submit">
                      Edit
                    </button>
                  </Link>
                  <Link>
                    <button className="btn btn-primary" type="submit">
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>;
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
};
