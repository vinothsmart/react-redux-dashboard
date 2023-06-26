import { useState, useEffect } from "react";

export const Testing = () => {
  const [userData, setUserData] = useState({});
  const getUserData = () => {
    // const url = "https://jsonplaceholder.typicode.com/users/1";
    const url2 = "https://jsonplaceholder.typicode.com/users";

    // return fetch(url).then((data) => {
    //   data.json().then((user) => {
    //     setUserData(user);
    //   });
    // });

    return fetch(url2).then((data) => {
      data.json().then((user) => {
        setUserData(user);
      });
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(userData);
  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Testing</h1>
          {/* <h2>User Data</h2>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Website:</strong> {userData.website}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone:</strong> {userData.phone}
          </p> */}
        </div>
      </div>
    </>
  );
};
