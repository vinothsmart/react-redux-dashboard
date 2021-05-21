import { Helmet } from "react-helmet";

export const Testing = () => {
  return (
    <>
      <Helmet>
        <title>Testing Page</title>
      </Helmet>
      <div className="container">
        <div className="py-4">
          <h1> Testing Page</h1>
        </div>
      </div>
    </>
  );
};
