import React from "react";
import { useQuestionData } from "@/context/QuestionContex";

export function Right() {
  const { data, setData } = useQuestionData();
  return (
    <div className="w-3/4 bg-[#82dc82] h-[100vh] p-10">
      <div className="flex w-[100px] h-[50px] rounded-[5px] bg-white p-3">
        {data}
      </div>
    </div>
  );
}
