import { useRef, useState } from "react";
import { toPng } from "html-to-image";

function App() {
  const [logoText, setLogoText] = useState("Your Logo");
  const [logoColor, setLogoColor] = useState("#000000");
  const [fontSize, setFontSize] = useState(36);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textShadow, setTextShadow] = useState(false);
  const [shadowIntensity, setShadowIntensity] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const [textAlign, setTextAlign] = useState("center");

  const logoRef = useRef(null);

  const handleTextChange = (e) => {
    setLogoText(e.target.value);
  };

  const handleColorChange = (e) => {
    setLogoColor(e.target.value);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleShadowToggle = () => {
    setTextShadow(!textShadow);
  };

  const handleShadowIntensityChange = (e) => {
    setShadowIntensity(e.target.value);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  const handleTextAlignChange = (e) => {
    setTextAlign(e.target.value);
  };

  const downloadLogo = () => {
    if(logoRef.current) {
      toPng(logoRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'logo.png';
          link.click();
        })
        .catch((error) => {
          console.error('Failed to download logo', error);
        });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h1 className="text-4xl font-bold">Logo Maker</h1>

      <input
        type="text"
        placeholder="Enter logo text"
        value={logoText}
        onChange={handleTextChange}
        className="p-2 text-lg mt-5 mb-5 border border-gray-300 rounded"
      />
      <input
        type="color"
        value={logoColor}
        onChange={handleColorChange}
        className="mb-5 border-none"
      />
      <input
        type="range"
        min="20"
        max="100"
        value={fontSize}
        onChange={handleFontSizeChange}
        className="mb-5"
      />
      <select
        value={fontFamily}
        onChange={handleFontFamilyChange}
        className="p-2 border border-gray-300 rounded mb-5"
      >
        <option value="Arial">Arial</option>
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
      </select>

      <label className="mb-5">
        <input
          type="checkbox"
          checked={textShadow}
          onChange={handleShadowToggle}
          className="mr-2"
        />{" "}
        Enable Text Shadow
      </label>
      {textShadow && (
        <input
          type="range"
          min="0"
          max="10"
          value={shadowIntensity}
          onChange={handleShadowIntensityChange}
          className="mb-5"
        />
      )}

      <input
        type="color"
        value={backgroundColor}
        onChange={handleBackgroundColorChange}
        className="mb-5"
      />

      <div className="flex gap-4 mb-5">
        <label>
          <input
            type="radio"
            value="left"
            checked={textAlign === "left"}
            onChange={handleTextAlignChange}
            className="mr-2"
          />
          Left
        </label>
        <label>
          <input
            type="radio"
            value="center"
            checked={textAlign === "center"}
            onChange={handleTextAlignChange}
            className="mr-2"
          />
          Center
        </label>
        <label>
          <input
            type="radio"
            value="right"
            checked={textAlign === "right"}
            onChange={handleTextAlignChange}
            className="mr-2"
          />
          Right
        </label>
      </div>
      
      <button
        onClick={downloadLogo}
        className="px-5 py-5 mt-6 mb-4 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
      >
        Download Logo
      </button>

      <div
        ref={logoRef}
        className="text-4xl font-bold p-5"
        style={{
          color: logoColor,
          fontSize: `${fontSize}px`,
          fontFamily: fontFamily,
          textAlign: textAlign,
          textShadow: textShadow
            ? `2px 2px ${shadowIntensity}px rgba(0,0,0,0.5)`
            : "none",
          backgroundColor: backgroundColor,
        }}
      >
        {logoText}
      </div>
    </div>
  );
}

export default App;
