import { SeoTool } from "../../elements";

export const AddRole = () => {
  return (
    <>
      <SeoTool title="Add Role" />
      <div className="container">
        <div className="py-3">
          <div className="card border-0 shadow">
            <div className="card-header">Add a Role</div>
            <div className="card-body">
              <form>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="role"
                    //   value={name}
                    //   onChange={(e) => {
                    //     setName(e.target.value);
                    //   }}
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
