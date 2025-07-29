import { WiAlien, WiDirectionLeft } from "react-icons/wi";
import { useState } from "react";
import LateralBar from "./LateralBar.jsx";

export default function sideBtn() {
  const [showText, setShowText] = useState(false);

  function handleBtn(event) {
    event.preventDefault();
    setShowText(!showText);
  }

  return (
    <div>
      <button onClick={handleBtn} className="absolute top-8 left-5 z-2">
        {showText ? <WiDirectionLeft size={82} /> : <WiAlien size={82} />}
      </button>

      {showText && <LateralBar />}
    </div>
  );
}
