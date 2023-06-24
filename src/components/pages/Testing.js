import { Fragment, useEffect, useState, useCallback } from "react";

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

export const Testing = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const userData = await fetch(usersDataURL);
      const result = await userData.json();
      setUsers(result);
    } catch {
      setIsError(true);
    }
    setIsLoading(false);
  };

  const fetchUserData = useCallback(() => {
    fetchUser();
  }, []);

  const handleDelete = useCallback(
    (id) => () => {
      const deleteUser = users.filter((user) => user.id !== id);
      setUsers(deleteUser);
    },
    [users]
  );

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (isLoading) <h2>Loading...</h2>;
  if (isError) <h2>Error...</h2>;
  return (
    <>
      <div className="container">
        <div className="py-4">
          {users.map(({ id, name }) => (
            <Fragment key={id}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <h2>{name}</h2>
                <button className="btn btn-danger" onClick={handleDelete(id)}>
                  Delete
                </button>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
