import { SeoTool } from "../../elements";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRoles } from "../../../actions";
import RoleList from "./RoleList";

export const Roles = () => {
  const dispatch = useDispatch();
  const roles = useSelector((state) => state.role.roles);

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

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
          <RoleList rolesData={roles} />
        </div>
      </div>
    </>
  );
};
