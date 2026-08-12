import { useEffect, useRef, useState } from "react";

interface LiquidBackgroundProps {
  children: React.ReactNode;
  className?: string;
  color?: number;
}

export function LiquidBackground({
  children,
  className = "",
  color = 0xff4400,
}: LiquidBackgroundProps) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any = null;
    let isMounted = true;

    // Dynamically import Three and Vanta on the client-side to prevent SSR Node crashes
    Promise.all([
      import("three"),
      // @ts-ignore
      import("vanta/dist/vanta.waves.min"),
    ]).then(([THREE, VantaModule]) => {
      if (!isMounted) return;
      const WAVES = VantaModule.default || VantaModule;

      if (!vantaEffect && myRef.current) {
        effect = WAVES({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: color,
          shininess: 80,
          waveHeight: 30,
          waveSpeed: 0.8,
          zoom: 0.75,
        });
        setVantaEffect(effect);
      }
    });

    return () => {
      isMounted = false;
      if (effect) effect.destroy();
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, color]);

  return (
    <div ref={myRef} className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative z-10 w-full h-full">{children}</div>
      {/* Add a subtle dark gradient overlay to make it look even more glassy and rich */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent z-[5]"></div>
    </div>
  );
}
