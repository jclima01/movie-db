import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  removeFromWatchlist } from "../../redux/actions";

const Watchlist = () => {
  const user = useSelector((state) => state.user);
const dispatch = useDispatch()
  return (
    <div >
      <ul className="d-flex flex-column">
        {user.watchlist?.map((m) => (
          <div key={m} className="d-flex justify-content-between">
           
            <h1 >title: {m}</h1>
            <Button className="btn btn-danger" onClick={()=>dispatch(removeFromWatchlist(user,m, false))}>Delete from watchlist</Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Watchlist;
