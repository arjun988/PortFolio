import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        color: getDynamicColor(),
        size: getRandomSize(),
      };

      setTrails((prev) => [newTrail, ...prev.slice(0, 14)]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getDynamicColor = () => {
    const hue = Math.floor(Math.random() * 360); // Random hue for dynamic colors.
    return `hsl(${hue}, 70%, 60%)`; // Vibrant color palette that feels modern.
  };

  const getRandomSize = () => Math.random() * 10 + 5; // Sizes between 5px and 15px.

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute pointer-events-none"
          style={{
            left: trail.x,
            top: trail.y,
            width: `${trail.size}px`,
            height: `${trail.size}px`,
            background: trail.color,
            borderRadius: '50%',
            opacity: 1 - index * 0.1, // Smoothly fades out.
            transform: `translate(-50%, -50%) scale(${1 - index * 0.1})`, // Shrinks with each trail.
            transition: 'all 0.15s ease-out',
            boxShadow: `0 0 20px ${trail.color}, 0 0 40px ${trail.color}`, // Bright glowing effect
            animation: `trailAnimation 1s ease-out ${index * 0.1}s`, // Adds slight delay for trail effect
          }}
        ></div>
      ))}
    </div>
  );
};

export default CursorTrail;
