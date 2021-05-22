import { Helmet } from "react-helmet";

export const SeoTool = (props) => {
  const { title, keywords, description } = props;

  return (
    <>
      <Helmet>
        <title>
          {title
            ? "Vinoth Smart | " + title
            : "Vinoth Smart | React Redux Dashboard"}
        </title>
        <meta
          name="keywords"
          content={
            keywords
              ? "Vinoth Smart | " + keywords
              : "Vinoth Smart | React Redux Dashboard"
          }
        />
        <meta
          name="description"
          content={
            description
              ? "Vinoth Smart | " + description
              : "Vinoth Smart | React Redux Dashboard"
          }
        />
      </Helmet>
    </>
  );
};
