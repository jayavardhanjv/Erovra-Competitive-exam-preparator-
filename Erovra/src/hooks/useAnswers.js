import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswers(videoID,LevelID) {
  // const levelID = "l1";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      // database related works
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoID +"/"+LevelID+ "/questions");
      const answerQuery = query(answerRef, orderByKey());
      console.log(videoID,LevelID)
      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const snapshot = await get(answerQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID,LevelID]);

  return {
    loading,
    error,
    answers,
  };
}
