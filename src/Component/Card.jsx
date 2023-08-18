import { useState } from "react";
import ReactStars from "react-stars";

function Card() {
  const [data, setData] = useState([
    {
      name: "Joker",
      year: "2018",
      rating: 5,
      img: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
    },
    {
      name: "Joker",
      year: "2018",
      rating: 2,
      img: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
    },
    {
      name: "Joker",
      year: "2018",
      rating: 1,
      img: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
    },
    {
      name: "Joker",
      year: "2018",
      rating: 4,
      img: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
    },
    {
      name: "Joker",
      year: "2018",
      rating: 5,
      img: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500",
    },
  ]);
  return (
    <div className="flex flex-wrap justify-between p-3 mt-2 ">
      {data.map((item, i) => {
        const { name, year, rating, img } = item;

        return (
          <div
            key={i}
            className="card  shadow-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-500"
          >
            <img className="h-72" src={img} alt={name} />
            <h1>
              <span className="text-gray-500">name:</span> {name}
            </h1>
            <div className="flex items-center">
              <span className="text-gray-500 mr-1">Rating:</span>
              <ReactStars size={20} half={true} value={rating} edit={false} />
            </div>
            <p>
              <span className="text-gray-500">Year:</span> {year}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
