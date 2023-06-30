import { useEffect, useState } from "react";

export const Testing = () => {
  // currentTime is the state variable
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    const timeout = setTimeout(() => {
      // setCurrentTime(currentTime);
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentTime]);

  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1>Testing</h1>
          <div>{currentTime} </div>
        </div>
      </div>
    </>
  );
};
