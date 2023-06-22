import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  removeFromWatchlist } from "../../redux/actions";

const Watchlist = () => {
  const user = useSelector((state) => state.user);
const dispatch = useDispatch()
  return (
    <div >
      <ul className="d-flex flex-column">
        {user.watchlist?.map((m) => (
          <div key={m.id} className="d-flex justify-content-between">
           {console.log(m)}
            <h1 >{m.title}</h1>
            <button className="" onClick={()=>dispatch(removeFromWatchlist(user,m))}>Delete from watchlist</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
