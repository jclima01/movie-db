import React from "react";
import { useSelector } from "react-redux";
import dateFormat, { masks } from "dateformat";

const Reseña = ({ comment, createdAt }) => {
  const user = useSelector((state) => state.user);
  return (
    <div className="border">
      <header className=" flex justify-between">
        <span>{user.name}</span>
        <span>{dateFormat(createdAt, "dddd, mmmm dS, yy, h:MM TT")}</span>
      </header>
      <section className="px-10 py-2">
        <h3>{comment}</h3>
      </section>
    </div>
  );
};

export default Reseña;
