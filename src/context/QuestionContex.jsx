import React, { createContext, useContext, useState } from "react";

const QuestionContext = createContext();
export const useQuestionData = () => useContext(QuestionContext);

export function QuestionProvider({ children }) {
  const [data, setData] = useState(0);
  console.log(data);
  return (
    <QuestionContext.Provider value={{ data, setData }}>
      {children}
    </QuestionContext.Provider>
  );
}

const dummyData = {
  question: {
    title: "Push method in React Hooks (useState)?",
    detail:
      "How to push element inside useState array React hook? Is that as an old method in react state? Or something new? E.g. setState push example ?",
  },
  answers: [
    {
      text: "You can use the spread operator to push an element to an array in React Hooks:",
      rating: 10,
    },
    {
      text: "lorem 10",
      rating: 9,
    },
    {
      text: "lorem 3",
      rating: 11,
    },
  ],
};
