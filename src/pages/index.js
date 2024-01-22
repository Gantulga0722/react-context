import { useState, useEffect, useContext } from "react";
import { Header, Left, Right } from "@/components";

const data = [];

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Left />
        <Right />
      </div>
    </div>
  );
}
