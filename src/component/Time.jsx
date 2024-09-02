import { useState, useEffect } from 'react';

const Time = ({ data, removeCard }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer <= 0) return;
    
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          removeCard(data.createAt); // Corrected from createdAt to createAt
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, data.createAt, removeCard]);

  return (
    <div
      className="h-32 w-32 flex flex-col justify-center items-center rounded-md"
      style={{
        backgroundColor: data.bgcolor,
        color: data.color,
      }}
    >
      <h1 className="text-5xl">{data.text}</h1>
      <h1 className="text-2xl pt-2">{timer} s</h1>
    </div>
  );
};

export default Time;
