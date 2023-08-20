import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { Audio, ThreeDots } from "react-loader-spinner";
import { getDocs } from "firebase/firestore";
import { movieRef } from "../firebase/Firebase";
import { Link } from "react-router-dom";

function Card() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const _data = await getDocs(movieRef);

        _data.forEach((doc) => {
          setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-between px-3 mt-2 ">
      {loading ? (
        <div className="flex w-full h-96 justify-center items-center ">
          <ThreeDots height={40} color="white" />
        </div>
      ) : (
        data.map((item, i) => {
          const { title, year, image } = item;

          return (
            <Link to={`/detail/${item.id}`} key={i}>
              <div
                key={i}
                className="card  shadow-lg p-2 hover:-translate-y-3 cursor-pointer  mt-6 transition-all duration-500"
              >
                <img className="h-60 md:h-72" src={image} alt={name} />
                <h1>
                  <span className="text-gray-500">name:</span> {title}
                </h1>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-1">Rating:</span>
                  <ReactStars
                    size={20}
                    half={true}
                    value={item.rating / item.rated}
                    edit={false}
                  />
                </div>
                <p>
                  <span className="text-gray-500">Year:</span> {year}
                </p>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default Card;

//img: "https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
