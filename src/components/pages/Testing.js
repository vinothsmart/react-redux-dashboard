import axios from "axios";
import { useCallback, useState, useEffect, Fragment } from "react";

const GITHUB_USERS_API = "https://api.github.com/users";

export const Testing = () => {
  const [users, setUsers] = useState([]);

  const fetchUsersData = useCallback(() => {
    axios.get(GITHUB_USERS_API).then((res) => {
      setUsers(res.data);
    });
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
