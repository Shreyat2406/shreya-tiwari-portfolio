import { useEffect, useState } from "react";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex items-center justify-center transition-opacity duration-700 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center">
        <div className="text-2xl font-semibold tracking-tight text-gradient animate-fade-in">
          Shreya Tiwari
        </div>
        <div className="mt-4 w-32 h-px mx-auto overflow-hidden" style={{ background: "var(--glass-border-c)" }}>
          <div className="h-full" style={{ background: "var(--foreground)", animation: "loadbar 1.1s ease-out forwards", width: "100%", transformOrigin: "left", transform: "scaleX(0)" }} />
        </div>
      </div>
      <style>{`@keyframes loadbar { from { transform: scaleX(0);} to { transform: scaleX(1);} }`}</style>
    </div>
  );
}
