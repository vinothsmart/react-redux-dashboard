import { Helmet } from "react-helmet";

export const SeoTool = (props) => {
  const { title, keywords, description } = props;

  return (
    <>
      <Helmet>
        <title>{title ? title : "React Redux Dashboard"}</title>
        <meta
          name="keywords"
          content={
            keywords ? keywords : "Web site created using create-react-app"
          }
        />
        <meta
          name="description"
          content={
            description
              ? description
              : "Web site created using create-react-app"
          }
        />
      </Helmet>
    </>
  );
};
