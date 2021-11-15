const Button = (props) => {
  // const [count, setCount] = useState(0);

  // const incrementCount = (addedValue) => {
  //   // console.log("values");
  //   setCount(count + addedValue);
  // };

  const { buttonName, incrementingValue } = props;

  return (
    <>
      <button onClick={incrementingValue}>{buttonName}</button>
    </>
  );
};

export default Button;
