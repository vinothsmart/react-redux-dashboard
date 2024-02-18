import { useEffect, useState, useCallback } from "react";

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

const OldUsers = () => {
  const [list, setList] = useState([]);

  const fetchUsers = async () => {
    try {
      const resp = await fetch(usersDataURL);
      const data = await resp.json();
      setList(data);
    } catch {
      console.log({ text: "Something went wrong!" });
    }
  };

  const handleDelete = useCallback(
    (id) => () => {
      const deleteUser = list.filter((user) => user.id !== id);
      setList(deleteUser);
    },
    [list]
  );

  useEffect(() => {
    fetchUsers();
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
                  <p>{name}</p>
                </div>
                <div className="col-lg-4">
                  <button
                    onClick={handleDelete(id)}
                    className="btn btn-danger btn-sm float-right"
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

export default OldUsers;
