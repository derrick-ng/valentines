"use client";

import { useState } from "react";

export default function Home() {
  const [noCount, setNoCount] = useState(1);
  const [confirmYes, setConfirmYes] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [defaultView, setDefaultView] = useState(true);
  const [yay, setYay] = useState(false);

  const yesButtonSize = noCount * 20 + 16;

  function onYesClick() {
    if (confirmYes) {
      setConfirmYes(false);
      setDefaultView(false);

      setTimeout(() => {
        setShowImage(true);
        setYay(false);
      }, 10000);

      setYay(true);
    } else {
      setConfirmYes(true);
    }
  }

  function onNoClick() {
    setNoCount(noCount + 1);

    if (noCount == 5) {
      setDefaultView(false);

      setTimeout(() => {
        setShowVideo(true);
      }, 2000);
    }
  }

  return (
    <div>
      {defaultView && (
        <div>
          <h1>valentine?</h1>
          <button style={{ fontSize: yesButtonSize }} onClick={onYesClick}>
            Yes
          </button>
          <button onClick={onNoClick}>No</button>
        </div>
      )}

      {confirmYes && (
        <div>
          <p>REALLY?!??</p>
        </div>
      )}

      {yay && (
        <div>
          <p>yay!</p>
        </div>
      )}

      {showVideo && (
        <div>
          <video src="/val_vid2.mov" autoPlay width={1500}></video>
        </div>
      )}

      {showImage && (
        <div>
          <img className="mx-auto" width={900} src="/val_yes.png" />
        </div>
      )}
    </div>
  );
}
