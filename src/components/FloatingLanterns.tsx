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
          className="absolute w-3 h-3 bg-accent rounded-full opacity-60 blur-sm floating"
          style={{
            left: lantern.left,
            top: "100%",
            animationDelay: lantern.delay,
            animationDuration: lantern.duration,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingLanterns;
