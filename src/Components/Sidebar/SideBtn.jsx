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
      <button onClick={handleBtn} className="fixed top-4 left-4 z-3">
        {showText ? <WiDirectionLeft size={82} /> : <WiAlien size={82} />}
      </button>

      {showText && <LateralBar />}
    </div>
  );
}
