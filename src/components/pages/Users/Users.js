import { useList } from "./useList";

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
                  <p>{name.slice(0, 30) + (name.length > 30 ? "..." : "")}</p>
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
