import React, { FC } from "react";

interface ILike {
  like: boolean;
  onClick: (e: React.MouseEvent) => void;
}

const Like: FC<ILike> = ({ like, onClick }) => {
  return (
    <div
      className="absolute bottom-0 right-0 hover:bg-slate-100 hover:rounded"
      role={"button"}
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill={like ? "red" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
  );
};

export default Like;
