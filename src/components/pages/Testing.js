import React, { useCallback, useEffect, useState } from "react";

const USERSURL = "https://jsonplaceholder.typicode.com/users";

export const Testing = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    name: "",
    zipcode: "",
  });

  const fetchUsers = useCallback(async () => {
    const response = await fetch(USERSURL);
    const usersData = await response.json();
    setUsers(usersData);
  }, []);

  const handleSelectUser = useCallback(
    (userId) => () => {
      setSelectedUsers((prevSelectedUsers) => {
        if (prevSelectedUsers.includes(userId)) {
          return prevSelectedUsers.filter((id) => id !== userId);
        } else {
          return [...prevSelectedUsers, userId];
        }
      });
    },
    [],
  );

  const handleDeleteUsers = useCallback(() => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => !selectedUsers.includes(user.id)),
    );
    setSelectedUsers([]);
  }, [selectedUsers]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setNewUser((prevNewUser) => ({
      ...prevNewUser,
      [name]: value,
    }));
  }, []);

  const handleAddUser = useCallback(() => {
    const newUserData = {
      id: users.length + 1,
      name: newUser.name,
      address: {
        zipcode: newUser.zipcode,
      },
    };
    setUsers((prevUsers) => [...prevUsers, newUserData]);
    setNewUser({ name: "", zipcode: "" });
  }, [newUser, users]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Add Users </h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newUser.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Zipcode"
            name="zipcode"
            value={newUser.zipcode}
            onChange={handleChange}
          />
          <button onClick={handleAddUser}> Add User</button>
          <h1>Users List</h1>
          <button onClick={handleDeleteUsers}> Delete Users</button>
          <ul>
            {users.map((user) => (
              <div key={user.id}>
                <input
                  type="checkbox"
                  onChange={handleSelectUser(user.id)}
                  checked={selectedUsers.includes(user.id)}
                />
                <h1>{user.name}</h1>
                <h2>{user.address.zipcode}</h2>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
