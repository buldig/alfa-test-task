import React, { FC } from "react";
import { ICat } from "../models/ICat";
import Like from "./Like";
import { useAppDispatch } from "../hooks/redux";
import { likeCat, deleteCat } from "../store/reducers/CatSlice";

interface CardItemProps {
  cat: ICat;
}

const Card: FC<CardItemProps> = ({ cat }) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(likeCat(cat.id));
  };
  const handleDelete = () => {
    dispatch(deleteCat(cat.id));
  };
  return (
    <div className="w-44 h-40 mr-4 mb-5 box-border rounded relative">
      <div
        className="absolute top-0 right-0 hover:bg-slate-100"
        role={"button"}
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <img className="w-full h-full" key={cat.id} src={cat.url} alt="cat"></img>
      <Like like={cat.like} onClick={handleClick} />
    </div>
  );
};

export default Card;
