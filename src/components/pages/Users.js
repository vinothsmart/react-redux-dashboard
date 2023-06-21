import { useCallback, useEffect, useState } from "react";
const usersDataURL = "https://jsonplaceholder.typicode.com/users";

export const Users = () => {
  // Our local state
  const [list, setList] = useState([]);

  // Handler to load data from the server
  const fetchList = async () => {
    try {
      const resp = await fetch(usersDataURL);
      const data = await resp.json();

      setList(data);
    } catch {
      console.log({ text: "Something went wrong!" });
    }
  };

  // We want to fetch only on mount
  useEffect(() => {
    fetchList();
  }, []);

  // Handler responsible for deleting items
  const handleDeleteItem = useCallback((id) => {
    return () => {
      try {
        // We want to send a DELETE request to the server
        setList((prev) => prev.filter((x) => x.id !== id));
      } catch {
        console.log({ text: "Something went wrong!" });
      }
    };
  }, []);
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
