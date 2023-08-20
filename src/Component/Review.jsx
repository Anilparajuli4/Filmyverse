import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/Firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
function Review({ id, prevRating, userRated }) {
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState();
  const [data, setData] = useState([]);

  async function sendReview() {
    setLoading(true);
    try {
      await addDoc(reviewsRef, {
        movieId: id,
        name: "anil parajuli",
        rating: rating,
        thought: form,
        timeStamp: new Date().getTime(),
      });
      const ref = doc(db, "movies", id);
      await updateDoc(ref, {
        rating: prevRating + rating,
        rated: userRated + 1,
      });
      setRating(0);
      setForm("");
      swal({
        title: "Review Sent",
        icon: "success",
        buttons: false,
        timer: 300,
      });
      setLoading(false);
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 300,
      });
      setLoading(false);
    }
  }

  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      setData([]);
      let quer = query(reviewsRef, where("movieId", "==", id));
      const querySnapshot = await getDocs(quer);
      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });
      setReviewsLoading(false);
    }
    getData();
  }, []);
  return (
    <div className="mt-4 border-t-2 border-gray-700 w-full">
      <ReactStars
        size={30}
        half={true}
        value={rating}
        edit={true}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        type="text"
        placeholder="share your thoughts.."
        className="w-full p-2 outline-none header"
      />
      <button
        onClick={sendReview}
        className="bg-green-600 mt-1 flex justify-center w-full p-2"
      >
        {loading ? <TailSpin height={20} color="white" /> : "Share"}
      </button>
      {reviewsLoading ? (
        <div className="mt-8 flex justify-center">
          <ThreeDots height={15} color="white" />
        </div>
      ) : (
        <div className="mt-4 p-2">
          {data.map((e, i) => {
            return (
              <div
                className="bg-gray-900 p-2 border-b header bg-opacity-50 border-gray-600 w-full mt-2"
                key={i}
              >
                <div className="flex">
                  <p className="text=blue-500">{e.name}</p>
                  <p className="ml-3 text-xs">
                    {new Date(e.timeStamp).toLocaleString()}
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                  onChange={(rate) => setRating(rate)}
                />
                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Review;
