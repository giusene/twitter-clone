import "./index.css";

const TrendItem = ({ data }) => {
  return (
    <div>
      <h3>{data.subTitle}</h3>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
    </div>
  );
};

export default TrendItem;
