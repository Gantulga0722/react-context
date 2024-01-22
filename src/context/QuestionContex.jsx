import React, {
  createContext,
  useContext,
  createContext,
  useState,
} from "react";

const QuestionContext = createContext();
export const useQuestionData = () => useContext(QuestionContext);

export function QuestionProvider({ children }) {
  const [data, setData] = useState(dummyData);
  return (
    <QuestionContext.Provider value={{ data, setData }}>
      {children}
    </QuestionContext.Provider>
  );
}
