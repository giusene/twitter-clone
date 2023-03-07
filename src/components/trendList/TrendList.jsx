import TrendItem from "../trenItem";
import "./index.css";

const TrendList = () => {
  const arrayTrends = [
    {
      title: "Bla Bla Bla",
      subTitle: "subtitle 1",
      text: "Lorem Ipsum .... ",
    },
    {
      title: "Bla Bla Bla 2",
      subTitle: "subtitle 2",
      text: "Lorem Ipsum .... ",
    },
    {
      title: "Bla Bla Bla 3",
      subTitle: "subtitle 3",
      text: "Lorem Ipsum .... ",
    },
  ];

  return (
    <div>
      {arrayTrends.map((item, index) => (
        <TrendItem data={item} key={index} />
      ))}
    </div>
  );
};

export default TrendList;
