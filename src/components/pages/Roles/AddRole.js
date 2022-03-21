import { useCallback, useState } from "react";
import { SeoTool } from "../../elements";
import { createRole } from "../../../actions/index";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

export const AddRole = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [role, setRole] = useState("");

  const handleRole = useCallback(
    (e) => {
      setRole(e.target.value);
    },
    [setRole]
  );

  const addRole = useCallback(
    (e) => {
      e.preventDefault();
      const inputFields = {
        userRole: role,
      };
      dispatch(createRole(inputFields));
      history.push("/roles");
    },
    [dispatch, history, role]
  );

  return (
    <>
      <SeoTool title="Add Role" />
      <div className="container">
        <div className="py-3">
          <div className="card border-0 shadow">
            <div className="card-header">Add a Role</div>
            <div className="card-body">
              <form onSubmit={addRole}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="role"
                    value={role}
                    onChange={handleRole}
                  />
                </div>
                <button className="btn btn-primary float-start" type="submit">
                  Add Role
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
