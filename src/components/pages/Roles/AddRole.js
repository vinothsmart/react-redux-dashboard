import { useState } from "react";
import { SeoTool } from "../../elements";
import { createRole } from "../../../actions/index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export const AddRole = () => {
  let history = useHistory();
  const [role, setROle] = useState("");

  const dispatch = useDispatch();

  const addRole = (e) => {
    e.preventDefault();
    const inputFields = {
      userRoleId: role,
      userRole: role,
    };
    // console.log(inputFields);
    dispatch(createRole(inputFields));
    history.push("/roles");
  };

  return (
    <>
      <SeoTool title="Add Role" />
      <div className="container">
        <div className="py-3">
          <div className="card border-0 shadow">
            <div className="card-header">Add a Role</div>
            <div className="card-body">
              <form onSubmit={(e) => addRole(e)}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="role"
                    value={role}
                    onChange={(e) => {
                      setROle(e.target.value);
                    }}
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
