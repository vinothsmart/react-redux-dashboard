import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRole } from "../../../actions";
import { SeoTool } from "../../elements";

export const UpdateRole = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const selectedRole = useSelector((state) => state.role.role);

  const [role, setRole] = useState("");

  const loadRole = useCallback(() => {
    dispatch(getRole(id));
  }, [dispatch, id]);

  const handleChange = useCallback((e) => {
    setRole(e.target.value);
  }, []);

  useEffect(() => {
    loadRole();
  }, [loadRole]);

  useEffect(() => {
    setRole(selectedRole.userRole);
  }, [selectedRole]);

  return (
    <>
      <SeoTool title="Update Role" />
      <div className="container">
        <div className="py-3">
          <div className="card border-0 shadow">
            <div className="card-header">Update a Role</div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="role"
                    value={role}
                    onChange={handleChange}
                  />
                </div>
                <button className="btn btn-primary float-start" type="submit">
                  Update Role
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
