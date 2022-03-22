import { SeoTool } from "../../elements";
import { Link } from "react-router-dom";
import RoleList from "./RoleList";

export const Roles = () => {
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
          <RoleList />
        </div>
      </div>
    </>
  );
};
