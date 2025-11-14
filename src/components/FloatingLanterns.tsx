const FloatingLanterns = () => {
  const lanterns = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 4}s`,
    duration: `${6 + Math.random() * 4}s`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lanterns.map((lantern) => (
        <div
          key={lantern.id}
          className="absolute w-4 h-4 rounded-full opacity-70 blur-sm floating"
          style={{
            left: lantern.left,
            top: "100%",
            animationDelay: lantern.delay,
            animationDuration: lantern.duration,
            background: `radial-gradient(circle, hsl(${250 + Math.random() * 30} 95% ${65 + Math.random() * 10}%) 0%, hsl(${14 + Math.random() * 10} 90% ${60 + Math.random() * 10}%) 100%)`,
            boxShadow: `0 0 20px hsl(${250 + Math.random() * 30} 95% ${65 + Math.random() * 10}% / 0.6)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLanterns;
