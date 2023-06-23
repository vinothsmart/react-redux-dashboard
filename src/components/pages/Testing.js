import axios from "axios";
import { useCallback, useState, useEffect, Fragment } from "react";

const GITHUB_USERS_API = "https://api.github.com/users";

export const Testing = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const result = await axios.get(GITHUB_USERS_API);
      setUsers(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsersData = useCallback(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);
  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
          {users.map((user) => {
            return (
              <Fragment key={user.id}>
                <div className="card-header">
                  <h4>{user.login}</h4>
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};
