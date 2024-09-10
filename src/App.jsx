import { useState } from 'react';
import "./App.css"
import Button from './component/Button';
import Time from './component/Time';

const App = () => {
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
        createdAt: Date.now(),
      };
      setData([...data, obj]);
      setText(""); // Clear the input field after adding
    }
  };

  const onRemove = (createdAt) => {
    setData(data.filter((item) => item.createdAt !== createdAt));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addData();
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Set Color</h1>
        <div className="form-group">
          <label>Enter Text</label>
          <input
            value={text}
            type="text"
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="form-group">
          <label>Text Color</label>
          <input
            value={color}
            type="color"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Background Color</label>
          <input
            value={bgcolor}
            type="color"
            onChange={(e) => setBgcolor(e.target.value)}
          />
        </div>
        <div className="button-container">
          <Button
            bgcolor="#4F46E5"
            content="Add"
            onclick={addData}
            className="button"
          />
        </div>
      </div>

      <div className="data-container">
        {data.map((item) => (
          <Time
            key={item.createdAt}
            data={item}
            removeCard={onRemove}
            className="data-item"
            style={{ "--bgcolor": item.bgcolor, "--color": item.color }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
