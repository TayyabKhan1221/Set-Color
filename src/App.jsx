import { useState } from "react";
import Button from './component/Button';
import Time from './component/Time';
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [bgcolor, setBgcolor] = useState("#ffffff");
  const [data, setData] = useState([]);

  const addData = () => {
    if (text.trim() !== "") {
      const obj = {
        text: text,
        color: color,
        bgcolor: bgcolor,
        createAt: Date.now(), // Ensure consistency with property name
      };
      setData([...data, obj]);
      setText("");
    }
  };

  const onRemove = (createAt) => {
    setData(data.filter((item) => item.createAt !== createAt));
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      addData();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6">Set Color</h1>
      <div className="main space-y-4">
        <label className="block">
          Enter Text
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeypress}
            className="bg-gray-900 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type something..."
          />
        </label>
        <label className="block">
          Text Color
          <input
            value={color}
            type="color"
            onChange={(e) => setColor(e.target.value)}
            className="w-full h-12 border border-gray-600 rounded-lg cursor-pointer"
          />
        </label>
        <label className="block">
          Background Color
          <input
            value={bgcolor}
            type="color"
            onChange={(e) => setBgcolor(e.target.value)}
            className="w-full h-12 border border-gray-600 rounded-lg cursor-pointer"
          />
        </label>
      </div>
      <div className="flex justify-center mt-4">
        <Button
          bgcolor="#4F46E5"
          content="Add"
          onClick={addData}
          className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        />
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {data.map((item) => (
          <Time
            key={item.createAt} // Use createAt as key
            data={item}
            removeCard={onRemove}
            className="transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default App;
