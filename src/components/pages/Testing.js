export const Testing = () => {
  function handleClickMe(event) {
    console.log("clicked");
    // do not use 'this', no dom querying
    console.log(event.target);

    // event.target.innerText = "Clicked";
    // disable button
    event.target.disabled = true;
    // update button text
    event.target.innerText = "Clicked";
  }
  return (
    <>
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
          <button onClick={handleClickMe}> Click Me</button>
        </div>
      </div>
    </>
  );
};
