"use client";

import { useState } from "react";

export default function Home() {
  const [noCount, setNoCount] = useState(1);
  const [confirmYes, setConfirmYes] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [defaultView, setDefaultView] = useState(true);
  const [yay, setYay] = useState(false);

  const [exploded, setExploded] = useState(false);
  const [showExplosion, setShowExplosion] = useState(false);

  const yesButtonSize = noCount * 20 + 16 - 20;

  const noPhrases = [
    "No",
    "No?",
    "No???",
    "No!?!?!?!?!??!?!!!?",
    "Misclick?",
    "Wrong Button",
    "bruh",
    "really :(",
    "push the other one or else",
    "im gonna explode if you press no",
  ];
  const noPhrase = noPhrases[Math.min(noCount - 1, noPhrases.length - 1)];

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

    if (noCount == 10) {
      setDefaultView(false);
      setConfirmYes(false);
      setYay(false);

      setShowExplosion(true);

      setTimeout(() => {
        setShowExplosion(false);
        setExploded(true);

        setTimeout(() => {
          setShowVideo(true);
        }, 3500);
      }, 2500);
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${exploded ? "bg-white" : "bg-pink-300"}`}>
      <div className="flex items-center justify-center text-center min-h-screen">
        {defaultView && (
          <div className="flex flex-col items-center text-center space-y-3">
            <h1 className="text-2xl">will you be my valentine?</h1>

            <img src="miffy_heart.jpg" width={175} />

            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                <button className="px-3 border bg-blue-600 rounded-3xl" style={{ fontSize: yesButtonSize }} onClick={onYesClick}>
                  Yes
                </button>

                <button className="px-3 border bg-red-700 rounded-3xl" onClick={onNoClick}>
                  {noPhrase}
                </button>
              </div>

              {/* Appears BELOW buttons */}
              {confirmYes && <p className="text-8xl">REALLY?!??</p>}
            </div>
          </div>
        )}

        {yay && (
          <div>
            <p>yay!</p>
          </div>
        )}

        {showVideo && (
          <video
            src="/val_vid2.mov"
            autoPlay
            className=""
            width={1500}
            onEnded={() => {
              setShowVideo(false);
              setExploded(false);
              setNoCount(1);
              setConfirmYes(false);
              setYay(false);
              setDefaultView(true);
            }}
          />
        )}
        {showImage && (
          <div>
            <img className="mx-auto" width={900} src="/val_yes.png" />
          </div>
        )}
        {showExplosion && (
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <img src="/explosion.gif" className="w-96 h-96 object-contain" alt="Explosion" />
          </div>
        )}
        {exploded && !showExplosion && !showVideo && <p className="fixed inset-0 flex items-center justify-center text-sm">bruh</p>}
      </div>
    </div>
  );
}
