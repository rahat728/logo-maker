import React, { useState } from 'react';

function App() {
  const [logoText, setLogoText] = useState('Your Logo');
  const[logoColor, setLogoColor] = useState('#000000');
  const [fontSize, setFontSize] = useState(36);
  const [fontFamily, setFontFamily] = useState('Arial');

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
        className='mb-5 border-none'
      />
      <input
        type='range'
        min='20'
        max='100'
        value={fontSize}
        onChange={handleFontSizeChange}
        className='mb-5'
      />
      <select 
        value={fontFamily} 
        onChange={handleFontFamilyChange}
        className='p-2 border border-gray-300 rounded mb-5'
      >
        <option value="Arial">Arial</option>
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
        <option value="Verdana">Verdana</option>
      </select>
      <div 
        className="text-4xl font-bold" 
        style={{color: logoColor, fontSize: `${fontSize}px`, fontFamily }}>
        {logoText}
      </div>
    </div>
  );
}

export default App;
