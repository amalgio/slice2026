import React, { useState, useEffect, useRef } from 'react';
import { Activity, Zap, Volume2, VolumeX } from 'lucide-react';

type WaveType = 'sine' | 'square' | 'triangle' | 'sawtooth';

interface CroOscilloscopeProps {
  className?: string;
  title?: string;
  compact?: boolean;
}

export const CroOscilloscope: React.FC<CroOscilloscopeProps> = ({
  className = '',
  title = 'TEKTRONIX 465 VICTORIAN E-BENCH OSCILLOSCOPE',
  compact = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [waveType, setWaveType] = useState<WaveType>('sine');
  const [frequency, setFrequency] = useState<number>(3);
  const [amplitude, setAmplitude] = useState<number>(40);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);

  // Sound feedback helper
  const playAudioFeedback = (pitch: number) => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const audioCtx = new AudioCtx();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = pitch;
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch {
      // Audio context might be restricted before user gesture
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      // Adjust size dynamically to parent container
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      // Background grid
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
      ctx.lineWidth = 1;
      const gridSize = 25;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Center Crosshairs
      ctx.strokeStyle = 'rgba(244, 185, 66, 0.4)';
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Waveform Trace
      ctx.strokeStyle = '#F4B942';
      ctx.shadowColor = '#F4B942';
      ctx.shadowBlur = 10;
      ctx.lineWidth = 2.5;
      ctx.beginPath();

      const centerY = height / 2;

      for (let x = 0; x < width; x++) {
        const rad = (x / width) * Math.PI * 2 * frequency + t;
        let y = centerY;

        if (waveType === 'sine') {
          y = centerY - Math.sin(rad) * amplitude;
        } else if (waveType === 'square') {
          y = centerY - (Math.sin(rad) >= 0 ? 1 : -1) * amplitude;
        } else if (waveType === 'triangle') {
          y = centerY - (2 / Math.PI) * Math.asin(Math.sin(rad)) * amplitude;
        } else if (waveType === 'sawtooth') {
          const frac = (rad / (2 * Math.PI)) % 1;
          const positiveFrac = frac < 0 ? frac + 1 : frac;
          y = centerY - (2 * positiveFrac - 1) * amplitude;
        }

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      t += 0.05;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [waveType, frequency, amplitude]);

  const handleWaveChange = (newWave: WaveType) => {
    setWaveType(newWave);
    playAudioFeedback(400);
  };

  const handleFreqChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setFrequency(val);
    playAudioFeedback(300 + val * 50);
  };

  const handleAmpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setAmplitude(val);
    playAudioFeedback(200 + val * 3);
  };

  return (
    <div className={`max-w-4xl w-full mx-auto ${className}`}>
      <div className="bg-[#1C120C] border-2 border-[#D4AF37] p-4 sm:p-6 shadow-2xl space-y-4 relative rounded">
        {/* Corner Brass Rivets */}
        <span className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />
        <span className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />
        <span className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />

        {/* Console Header Bar */}
        <div className="flex flex-wrap justify-between items-center border-b border-[#8A6B3F] pb-3 text-xs font-mono text-[#F4B942] gap-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#F4B942] animate-pulse" />
            <span className="font-bold tracking-wider font-cinzel text-[11px] sm:text-xs text-[#FFF1A0]">{title}</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-special">
            <span className="text-[#F4B942]">CH1: 5.0V/DIV</span>
            <span className="text-[#D4AF37]">TIME: 1.0ms/DIV</span>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-1 px-1.5 py-0.5 rounded border border-[#8A6B3F] hover:border-[#D4AF37] text-[#E8D8B0] transition"
              title="Toggle Audio Feedback"
            >
              {soundEnabled ? <Volume2 className="w-3 h-3 text-[#F4B942]" /> : <VolumeX className="w-3 h-3 opacity-60" />}
              <span className="text-[9px] uppercase">{soundEnabled ? 'AUDIO ON' : 'MUTED'}</span>
            </button>
          </div>
        </div>

        {/* Canvas Screen */}
        <div className="relative bg-[#0C0906] border-2 border-[#8A6B3F] rounded-none overflow-hidden crt-vignette shadow-inner">
          <canvas
            ref={canvasRef}
            width={700}
            height={compact ? 180 : 220}
            className="w-full h-44 sm:h-56 block bg-[#120A05]"
          />
          {/* Moving CRT Scanline */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-[#F4B942]/30 to-transparent pointer-events-none animate-[scanline_4s_linear_infinite]" />

          {/* Live Signal Telemetry Overlay */}
          <div className="absolute top-2 left-2 bg-[#1C120C]/90 border border-[#8A6B3F] px-2.5 py-1 font-mono text-[10px] text-[#F4B942] space-y-0.5 shadow">
            <p>SIGNAL: {waveType.toUpperCase()}</p>
            <p>Vp-p: {(amplitude * 0.1).toFixed(1)}V</p>
            <p>FREQ: {(frequency * 12.5).toFixed(1)} kHz</p>
          </div>

          <div className="absolute bottom-2 right-2 bg-[#1C120C]/90 border border-[#8A6B3F] px-2 py-0.5 font-special text-[9px] text-[#D4AF37] flex items-center gap-1">
            <Activity className="w-3 h-3 text-[#FFF1A0] animate-pulse" />
            <span>LIVE ECE WAVEFORM ANALYSIS</span>
          </div>
        </div>

        {/* Oscilloscope Control Bench Knobs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs bg-[#120A05] p-3 border border-[#8A6B3F] rounded">
          
          {/* Waveform Selector */}
          <div className="space-y-1">
            <label className="text-[#D4AF37] font-bold block text-[11px] font-special">&gt; WAVEFORM TYPE:</label>
            <div className="grid grid-cols-2 gap-1.5">
              {(['sine', 'square', 'triangle', 'sawtooth'] as WaveType[]).map((w) => (
                <button
                  key={w}
                  onClick={() => handleWaveChange(w)}
                  className={`px-2 py-1 text-[10px] sm:text-[11px] border uppercase transition font-special font-bold rounded-sm ${
                    waveType === w
                      ? 'bg-[#D4AF37] text-[#1C120C] border-[#FFEAA7] shadow-[0_0_8px_rgba(212,175,55,0.5)]'
                      : 'bg-[#1C120C] text-[#E8D8B0] border-[#8A6B3F] hover:border-[#D4AF37]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Frequency Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-[#D4AF37] text-[11px] font-special">
              <span className="font-bold">&gt; TIME/DIV (FREQ):</span>
              <span className="text-[#F4B942] font-mono">{frequency}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              step="0.5"
              value={frequency}
              onChange={handleFreqChange}
              className="w-full accent-[#F4B942] cursor-pointer h-2 bg-[#1C120C] rounded border border-[#8A6B3F]"
            />
            <div className="flex justify-between text-[9px] text-[#C5A059] font-mono">
              <span>12.5 kHz</span>
              <span>100 kHz</span>
            </div>
          </div>

          {/* Amplitude Slider */}
          <div className="space-y-1">
            <div className="flex justify-between text-[#D4AF37] text-[11px] font-special">
              <span className="font-bold">&gt; VOLTS/DIV (AMP):</span>
              <span className="text-[#F4B942] font-mono">{amplitude}mV</span>
            </div>
            <input
              type="range"
              min="10"
              max="70"
              step="5"
              value={amplitude}
              onChange={handleAmpChange}
              className="w-full accent-[#F4B942] cursor-pointer h-2 bg-[#1C120C] rounded border border-[#8A6B3F]"
            />
            <div className="flex justify-between text-[9px] text-[#C5A059] font-mono">
              <span>1.0V</span>
              <span>7.0V</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
