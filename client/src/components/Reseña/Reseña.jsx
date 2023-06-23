import React from "react";
import { useSelector } from "react-redux";
import dateFormat, { masks } from "dateformat";

const Reseña = ({ comment, createdAt }) => {
  const user = useSelector((state) => state.user);
  return (
    <div className="border">
      <header>
        {user.name} {dateFormat(createdAt, "dddd, mmmm dS, yy, h:MM TT")}
      </header>
      <section>
        <h3>{comment}</h3>
      </section>
    </div>
  );
};

export default Reseña;
