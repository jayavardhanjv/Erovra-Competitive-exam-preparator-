import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoID,levelID) {
  // const levelID = "l1";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  // console.log(levelID)
  useEffect(() => {
    async function fetchQuestions() {
      // console.log(levelID)
      // database related works
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID+"/"+levelID+ "/questions");
      // const quizRef = ref(db, "quiz/" + videoID +"/questions");
      console.log("broooooooo");
      const quizQuery = query(quizRef, orderByKey());
      console.log(videoID)
      console.log(questions)

      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID,levelID]);

  return {
    loading,
    error,
    questions,
  };
}
