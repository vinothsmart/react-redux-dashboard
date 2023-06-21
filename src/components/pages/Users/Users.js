import { useList } from "./useList";
import { trimName } from "./Utility";

export const Users = () => {
  const { list, handleDeleteItem } = useList();

  return (
    <>
      <div className="container">
        <div className="py-4 mx-4">
          <h1> List Users Page</h1>
          {list.map(({ id, name }) => (
            <div key={id}>
              <div className="row">
                <div className="col-lg-4">
                  <p>{trimName(name)}</p>
                </div>
                <div className="col-lg-4">
                  <button
                    className="btn btn-danger btn-sm float-right"
                    onClick={handleDeleteItem(id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
