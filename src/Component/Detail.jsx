import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { db } from "../firebase/Firebase";
import { Bars } from "react-loader-spinner";
import Review from "./Review";
function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: "",
    rated: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="p-4 flex flex-col md:flex-row items-center md:items-start justify-center  mt-4 w-full">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center">
          <Bars height={25} color="white" />
        </div>
      ) : (
        <>
          <img
            className="h-96 block md:sticky top-24"
            src={data.image}
            alt={data.title}
          />
          <div className="md:ml-4 ml-0 md:w-1/2 w-full">
            <h1 className="text-3xl font-bold text-gray-400">
              {data.title}
              <span className="text-xl">({data.year})</span>
            </h1>
            <ReactStars
              size={20}
              half={true}
              value={data.rating / data.rated}
              edit={false}
            />
            <p className="mt-2 ">{data.description}</p>
            <Review id={id} prevRating={data.rating} userRated={data.rated} />
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
