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
  const [borderColor, setBorderColor] = useState("#000000");
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderStyle, setBorderStyle] = useState("solid");
  const [padding, setPadding] = useState(10);
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const logoRef = useRef(null);

  const handleTextChange = (e) => setLogoText(e.target.value);
  const handleColorChange = (e) => setLogoColor(e.target.value);
  const handleFontSizeChange = (e) => setFontSize(e.target.value);
  const handleFontFamilyChange = (e) => setFontFamily(e.target.value);
  const handleShadowToggle = () => setTextShadow(!textShadow);
  const handleShadowIntensityChange = (e) => setShadowIntensity(e.target.value);
  const handleBackgroundColorChange = (e) => setBackgroundColor(e.target.value);
  const handleTextAlignChange = (e) => setTextAlign(e.target.value);
  const handleBorderColorChange = (e) => setBorderColor(e.target.value);
  const handleBorderWidthChange = (e) => setBorderWidth(e.target.value);
  const handleBorderStyleChange = (e) => setBorderStyle(e.target.value);
  const handlePaddingChange = (e) => setPadding(e.target.value); // New function for padding
  const handleRotationChange = (e) => setRotation(e.target.value);
  const handleOpacityChange = (e) => setOpacity(e.target.value);
  const downloadLogo = () => {
    if (logoRef.current) {
      toPng(logoRef.current)
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "logo.png";
          link.click();
        })
        .catch((error) => {
          console.error("Failed to download logo", error);
        });
    }
  };

  return (
    <div className="flex flex-col h-screen text-center">
      <div className=""></div>
      <h1 className="text-4xl font-bold m-5">Logo Maker</h1>
      <div className="flex flex-row justify-evenly">
        <div className="flex flex-col">
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

          <input
            type="color"
            value={borderColor}
            onChange={handleBorderColorChange}
            className="mb-4"
          />
          <input
            type="range"
            min="1"
            max="10"
            value={borderWidth}
            onChange={handleBorderWidthChange}
            className="mb-4"
          />
          <select
            value={borderStyle}
            onChange={handleBorderStyleChange}
            className="p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="solid">Solid</option>
            <option value="dashed">Dashed</option>
            <option value="dotted">Dotted</option>
          </select>

          <input
            type="range"
            min="0"
            max="50"
            value={padding}
            onChange={handlePaddingChange}
            className="mb-4"
          />

          <input
            type="range"
            min="0"
            max="180"
            value={rotation}
            onChange={handleRotationChange}
            className="my-4"
          />

          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={opacity}
            onChange={handleOpacityChange}
            className="mb-4"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
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
              borderColor,
              borderWidth: `${borderWidth}px`,
              borderStyle,
              padding: `${padding}px`,
              transform: `rotate(${rotation}deg)`,
              opacity: opacity,
            }}
          >
            {logoText}
          </div>
          <button
            onClick={downloadLogo}
            className="px-5 py-5 mt-6 mb-4 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
          >
            Download Logo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
