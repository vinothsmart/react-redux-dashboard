import axios from "axios";
import React, { useEffect, useState } from "react";

const MemoHook = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data);
    });
  }, []);

  const findLognestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("This was Computed");

    return longestName;
  };

  return (
    <div>
      <h1>{findLognestName(data)}</h1>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  );
};

export default MemoHook;
