import * as React from 'react';
import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore"; 
import { useEffect, useReducer, useState } from "react";
import { useHistory, useParams, ReactDom } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
// import ReactDom from 'react-dom';
import Popup from 'react-popup';
import { db } from "../../firebase";


const initialState = null;

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    default:
      return state;
   console.log(questions);
  }
};


export default function Quiz() {
  const { id , L2} = useParams();
  console.log(L2)
  const { loading, error, questions } = useQuestions(id , L2);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [qna, dispatch] = useReducer(reducer, initialState);
  const [visible, setVisible] = useState(false)

  const { currentUser } = useAuth();
  const history = useHistory();
  const { location } = history;
  const { state } = location;
  // const { videoTitle } = state;

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  }
  console.log(id,L2,currentQuestion,"brooo i am running");

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
      console.log(questions.length);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
      
    }
  }

  // submit quiz
  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    console.log(id,L2,"in the quizz db");
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]:{
        [L2]:{ qna,
        }
      }
    });

    history.push({
      pathname: `/result/${id}/${L2}`,
      state: {
        qna,
      },
    });
  }
console.log(currentQuestion)
  // calculate percentage of progress
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;




  const Report=()=> {
    console.log(currentQuestion,id,L2)
    alert("the question is reported")
    addDoc(collection(db, "report"), {
      "qno":currentQuestion,
      "testid":id,
      "level":L2,
      "user id":currentUser.uid,
      "user name":currentUser.displayName
});
  }
console.log(currentUser)
  

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>There was an error!</div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuestion].title}</h1>
          {/* <h4>Question can have multiple answers</h4> */}
          <Answers
            input
            options={qna[currentQuestion].options}
            handleChange={handleAnswerChange}
          />
          <button type="button" onClick={Report} class="inline-block px-6 py-2.5 text-base bg-green-500 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Report</button>
          <ProgressBar
            next={nextQuestion}
            prev={prevQuestion}
            submit={submit}
            progress={percentage}
          />
        </>
      )}
    </>
  );
}
