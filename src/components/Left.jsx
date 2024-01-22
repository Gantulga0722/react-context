import React from "react";
import { useQuestionData } from "@/context/QuestionContex";

export function Left() {
  let { data, setData } = useQuestionData();

  const incrementHandler = () => {
    data += 1;
    setData(data);
    console.log(data);
  };
  const decrementHandler = () => {
    data -= 1;
    setData(data);
    console.log(data);
  };

  return (
    <div className="flex w-1/4 bg-[#9595d0] h-[100vh] gap-10 p-10">
      <button
        className="w-[80px] h-[30px] rounded-[5px] bg-white justify-center items-center"
        onClick={incrementHandler}
      >
        Increase
      </button>
      <button
        className="w-[80px] h-[30px] rounded-[5px] bg-white justify-center items-center"
        onClick={decrementHandler}
      >
        Decriease
      </button>
    </div>
  );
}
