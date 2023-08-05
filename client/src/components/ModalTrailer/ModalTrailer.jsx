import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import YouTube from "react-youtube";
import styles from "./ModalTrailer.module.css";

const ModalTrailer = (props) => {
  const trailer = useSelector((state) => state.trailer);
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <YouTube
          videoId={trailer.key}
          opts={{
            width: "100%",
            height: "600",
            playerVars: {
              autoplay: 1,
              controls: 1,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default ModalTrailer;
