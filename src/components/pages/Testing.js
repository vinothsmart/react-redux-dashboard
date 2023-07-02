import { useState, useCallback, useEffect, Suspense } from "react";

// jsonplaceholder
const userUrl = "https://jsonplaceholder.typicode.com/users";
export const Testing = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(userUrl);
    const data = await response.json();
    setUsers(data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Testing</h1>
          <Suspense fallback={<h1>Loading........</h1>}>
            <div>
              {users.map((user) => (
                <div key={user.id}>
                  <h1>{user.name}</h1>
                  <p>{user.email}</p>
                  <p>{user.phone}</p>
                  <p>{user.website}</p>
                </div>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
};
