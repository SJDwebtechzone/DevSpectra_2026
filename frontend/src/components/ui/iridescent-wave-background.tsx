"use client";

import React, { useEffect, useRef } from "react";

interface IridescentWaveBackgroundProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  speed?: number;         // flow speed, default 0.35
  intensity?: number;     // color/contrast intensity, default 1.0
  className?: string;
  showText?: boolean;
}

export function IridescentWaveBackground({
  title = "Where design",
  subtitle = "flows like light.",
  buttonText = "Get Started",
  onButtonClick,
  speed = 0.35,
  intensity = 1.0,
  className = "",
  showText = true,
}: IridescentWaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const pointer = useRef({ x: 0.5, y: 0.5, tX: 0.5, tY: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl") as WebGLRenderingContext) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vsSource = `
      precision mediump float;
      attribute vec2 a_position;
      varying vec2 vUv;
      void main() {
        vUv = 0.5 * (a_position + 1.0);
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Domain-warped flow field tuned for a soft, silky, pearlescent look
    const fsSource = `
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform float u_ratio;
      uniform vec2 u_pointer;
      uniform float u_speed;
      uniform float u_intensity;

      mat2 rot(float a) {
        float c = cos(a), s = sin(a);
        return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
        return sin(p.x) * cos(p.y);
      }

      // Fractal domain warp — gives the silk/glass ribbon folds
      float flow(vec2 uv, float t) {
        vec2 p = uv;
        float amp = 1.0;
        float freq = 1.6;
        vec2 shift = vec2(0.0);
        for (int i = 0; i < 6; i++) {
          p = rot(0.5 + float(i) * 0.3) * p;
          shift += amp * vec2(noise(p * freq + t), noise(p.yx * freq - t));
          p += shift * 0.35;
          amp *= 0.55;
          freq *= 1.35;
        }
        return noise(p * 2.0 + shift + t);
      }

      void main() {
        vec2 uv = vUv - 0.5;
        uv.x *= u_ratio;

        vec2 pointerOffset = (u_pointer - 0.5);
        pointerOffset.x *= u_ratio;
        uv += pointerOffset * 0.15;

        float t = u_time * u_speed;

        float f1 = flow(uv * 1.4, t);
        float f2 = flow(uv * 1.4 + 3.1, t * 1.15);
        float f3 = flow(uv * 1.4 - 1.7, t * 0.85);

        // Pearlescent pastel palette: sky blue, lilac, blush pink, peach, white
        vec3 skyBlue = vec3(0.75, 0.85, 0.95);
        vec3 lilac   = vec3(0.80, 0.78, 0.98);
        vec3 blush   = vec3(0.98, 0.82, 0.88);
        vec3 peach   = vec3(1.00, 0.90, 0.80);
        vec3 white   = vec3(1.00, 1.00, 1.00);

        vec3 color = mix(skyBlue, lilac, 0.5 + 0.5 * f1);
        color = mix(color, blush, 0.5 + 0.5 * f2);
        color = mix(color, peach, 0.35 + 0.35 * f3);

        // Iridescent sheen — thin highlight bands like light on silk
        float sheen = pow(0.5 + 0.5 * sin(f1 * 6.0 + t * 2.0), 6.0);
        color = mix(color, white, sheen * 0.6 * u_intensity);

        // Soft vignette so it reads as a background, not noise
        float vignette = 1.0 - smoothstep(0.4, 0.95, length(vUv - 0.5));
        color = mix(vec3(0.94, 0.96, 0.99), color, vignette);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const compile = (src: string, type: number) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compile(vsSource, gl.VERTEX_SHADER);
    const fragmentShader = compile(fsSource, gl.FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram()!;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "u_time");
    const uRatio = gl.getUniformLocation(program, "u_ratio");
    const uPointer = gl.getUniformLocation(program, "u_pointer");
    const uSpeed = gl.getUniformLocation(program, "u_speed");
    const uIntensity = gl.getUniformLocation(program, "u_intensity");

    gl.uniform1f(uSpeed, speed);
    gl.uniform1f(uIntensity, intensity);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { clientWidth, clientHeight } = canvas;
      canvas.width = clientWidth * dpr;
      canvas.height = clientHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uRatio, canvas.width / canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current.tX = (e.clientX - rect.left) / rect.width;
      pointer.current.tY = 1 - (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("pointermove", onPointerMove);

    const render = (time: number) => {
      pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.05;
      pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.05;

      gl.uniform1f(uTime, time * 0.001);
      gl.uniform2f(uPointer, pointer.current.x, pointer.current.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    };
    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, [speed, intensity]);

  return (
    <div className={`relative w-full h-full overflow-hidden flex items-center justify-center ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {showText && (
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-800 mb-4 drop-shadow-sm">
            {title}
            <br className="hidden sm:block" /> {subtitle}
          </h1>
          <p className="text-slate-600/80 text-lg mb-8 max-w-xl mx-auto">
            A softly animated, holographic backdrop — inspired by light moving across silk.
          </p>
          <button
            onClick={onButtonClick}
            className="px-8 py-4 rounded-full bg-slate-900/90 text-white font-medium text-sm sm:text-base hover:bg-slate-900 transition-colors shadow-lg"
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
}

export default IridescentWaveBackground;
