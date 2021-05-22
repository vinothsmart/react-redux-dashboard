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
        <div class="card">
          <div class="card-header">Featured</div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
