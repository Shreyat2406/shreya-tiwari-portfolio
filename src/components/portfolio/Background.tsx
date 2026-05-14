export function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        <div
          className="ambient-glow animate-pulse-glow"
          style={{
            width: 700, height: 700, top: -200, left: -150,
            background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)",
          }}
        />
        <div
          className="ambient-glow animate-pulse-glow"
          style={{
            width: 800, height: 800, bottom: -250, right: -200,
            background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)",
            animationDelay: "2s",
          }}
        />
        <div
          className="ambient-glow"
          style={{
            width: 500, height: 500, top: "40%", left: "50%", transform: "translate(-50%,-50%)",
            background: "radial-gradient(circle, rgba(255,255,255,0.03), transparent 70%)",
          }}
        />
      </div>
      <div className="noise-overlay" />
    </>
  );
}
