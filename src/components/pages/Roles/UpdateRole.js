import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getRole, updateRole } from "../../../actions";
import { SeoTool } from "../../elements";

export const UpdateRole = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const history = useHistory();

  const [role, setRole] = useState("");

  const selectedRole = useSelector((state) => state.role.role);

  const loadRole = useCallback(() => {
    dispatch(getRole(id));
  }, [dispatch, id]);

  const handleChange = useCallback((e) => {
    setRole(e.target.value);
  }, []);

  const handleRole = useCallback(
    (e) => {
      e.preventDefault();
      const inputFields = {
        id: id,
        userRole: role,
      };
      dispatch(updateRole(inputFields));
      history.push("/roles");
    },
    [dispatch, history, id, role]
  );

  useEffect(() => {
    loadRole();
  }, [loadRole]);

  useEffect(() => {
    if (selectedRole) {
      setRole(selectedRole.userRole);
    }
  }, [selectedRole]);

  return (
    <>
      <SeoTool title="Update Role" />
      <div className="container">
        <div className="py-3">
          <div className="card border-0 shadow">
            <div className="card-header">Update a Role</div>
            <div className="card-body">
              <form onSubmit={handleRole}>
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
