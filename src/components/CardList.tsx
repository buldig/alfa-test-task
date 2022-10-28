import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useAppSelector } from "../hooks/redux";
import { ICat } from "../models/ICat";

const CardList = () => {
  const cats = useAppSelector((state) => state.catReducer.cats);
  const [filteredCats, setFilteredCats] = useState<ICat[]>(cats);
  const [isFiltered, setFiltered] = useState(false);

  const filter = () => {
    if (!isFiltered) setFilteredCats(cats.filter((cat) => cat.like));
    else setFilteredCats(cats);
    setFiltered((prevState) => !prevState);
  };

  useEffect(() => {
    setFilteredCats(cats);
  }, [cats]);
  return (
    <div className="flex flex-col mx-auto max-w-4xl min-w-[50%] w-auto justify-center content-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 w-fit text-white font-bold py-2 px-4 rounded inline-block mb-6"
        onClick={filter}
      >
        Понравившиеся
      </button>
      <div className="flex flex-wrap content-center">
        {filteredCats?.map((cat) => (
          <Card key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
