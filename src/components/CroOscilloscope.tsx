import React, { useState, useEffect, useRef } from 'react';
import { Activity, Zap, Volume2, VolumeX, Binary, Cpu, BarChart2, Play, Pause } from 'lucide-react';

type WaveType = 'sine' | 'square' | 'triangle' | 'sawtooth';

interface CroOscilloscopeProps {
  className?: string;
  title?: string;
  compact?: boolean;
}

export const CroOscilloscope: React.FC<CroOscilloscopeProps> = ({
  className = '',
  title = 'VICTORIAN ECE DUAL LAB BENCH — ANALOG & DIGITAL OSCILLOSCOPE SIMULATOR',
  compact = false,
}) => {
  const analogCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const digitalCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [waveType, setWaveType] = useState<WaveType>('sine');
  const [frequency, setFrequency] = useState<number>(3);
  const [amplitude, setAmplitude] = useState<number>(40);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [isDigitalRunning, setIsDigitalRunning] = useState<boolean>(true);
  const [digitalMode, setDigitalMode] = useState<'sample' | 'fft' | 'logic'>('sample');

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
      // Audio context restricted before user interaction
    }
  };

  // Render Analog CRT Oscilloscope (Left)
  useEffect(() => {
    const canvas = analogCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const renderAnalog = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Analog phosphor grid
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

      // Center crosshairs
      ctx.strokeStyle = 'rgba(244, 185, 66, 0.35)';
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();

      // Analog Waveform Glow Trace
      ctx.strokeStyle = '#F4B942';
      ctx.shadowColor = '#F4B942';
      ctx.shadowBlur = 12;
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
      animId = requestAnimationFrame(renderAnalog);
    };

    renderAnalog();

    return () => cancelAnimationFrame(animId);
  }, [waveType, frequency, amplitude]);

  // Render Digital Storage Oscilloscope (Right)
  useEffect(() => {
    const canvas = digitalCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const renderDigital = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Digital Matrix LCD Grid (Cyan Tint)
      ctx.strokeStyle = 'rgba(0, 255, 204, 0.12)';
      ctx.lineWidth = 1;
      const gridSize = 20;
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

      const centerY = height / 2;

      if (digitalMode === 'sample') {
        // Digital Quantized Zero-Order-Hold (Staircase Step) DAC/ADC Waveform
        const sampleStep = 12; // Sample step width
        const quantizationLevels = 16; // 4-bit / 16-level digital quantization

        ctx.strokeStyle = '#00FFCC';
        ctx.fillStyle = '#39FF14';
        ctx.lineWidth = 2.5;

        // Draw Digital Quantization Horizontal Level Lines
        ctx.strokeStyle = 'rgba(0, 255, 204, 0.08)';
        ctx.lineWidth = 1;
        for (let l = 0; l <= quantizationLevels; l++) {
          const ly = centerY - amplitude + (l / quantizationLevels) * (amplitude * 2);
          ctx.beginPath();
          ctx.moveTo(0, ly);
          ctx.lineTo(width, ly);
          ctx.stroke();
        }

        // Draw Digital Quantized Staircase Trace
        ctx.strokeStyle = '#00FFCC';
        ctx.shadowColor = '#00FFCC';
        ctx.shadowBlur = 8;
        ctx.lineWidth = 2.5;
        ctx.beginPath();

        let prevY = centerY;

        for (let x = 0; x <= width; x += sampleStep) {
          const rad = (x / width) * Math.PI * 2 * frequency + (isDigitalRunning ? t : 0);
          let rawY = 0;

          if (waveType === 'sine') {
            rawY = Math.sin(rad);
          } else if (waveType === 'square') {
            rawY = Math.sin(rad) >= 0 ? 1 : -1;
          } else if (waveType === 'triangle') {
            rawY = (2 / Math.PI) * Math.asin(Math.sin(rad));
          } else if (waveType === 'sawtooth') {
            const frac = (rad / (2 * Math.PI)) % 1;
            const positiveFrac = frac < 0 ? frac + 1 : frac;
            rawY = 2 * positiveFrac - 1;
          }

          // Quantize signal into discrete digital steps
          const normalized = (rawY + 1) / 2; // 0.0 to 1.0
          const discreteStep = Math.round(normalized * (quantizationLevels - 1)) / (quantizationLevels - 1);
          const quantizedY = centerY - (discreteStep * 2 - 1) * amplitude;

          if (x === 0) {
            ctx.moveTo(x, quantizedY);
          } else {
            // Zero-Order Hold: Horizontal line to sample X, then vertical jump to new Y
            ctx.lineTo(x, prevY);
            ctx.lineTo(x, quantizedY);
          }
          prevY = quantizedY;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw Digital Vertical Sample Drop Lines & Square Node Markers
        for (let x = 0; x <= width; x += sampleStep * 2) {
          const rad = (x / width) * Math.PI * 2 * frequency + (isDigitalRunning ? t : 0);
          let rawY = 0;

          if (waveType === 'sine') rawY = Math.sin(rad);
          else if (waveType === 'square') rawY = Math.sin(rad) >= 0 ? 1 : -1;
          else if (waveType === 'triangle') rawY = (2 / Math.PI) * Math.asin(Math.sin(rad));
          else if (waveType === 'sawtooth') {
            const frac = (rad / (2 * Math.PI)) % 1;
            const positiveFrac = frac < 0 ? frac + 1 : frac;
            rawY = 2 * positiveFrac - 1;
          }

          const normalized = (rawY + 1) / 2;
          const discreteStep = Math.round(normalized * (quantizationLevels - 1)) / (quantizationLevels - 1);
          const quantizedY = centerY - (discreteStep * 2 - 1) * amplitude;

          // Vertical Drop Line
          ctx.strokeStyle = 'rgba(57, 255, 20, 0.25)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x, centerY);
          ctx.lineTo(x, quantizedY);
          ctx.stroke();

          // Square Digital Sample Node
          ctx.fillStyle = '#39FF14';
          ctx.fillRect(x - 2.5, quantizedY - 2.5, 5, 5);
        }

      } else if (digitalMode === 'fft') {
        // Digital FFT Spectrum Analyzer Bar Visualization
        const numBars = 32;
        const barWidth = width / numBars;
        const peakHarmonic = Math.min(Math.round(frequency), 8);

        for (let i = 0; i < numBars; i++) {
          let barHeight = Math.random() * 15 + 5;
          if (i === peakHarmonic * 3) barHeight = amplitude * 1.8;
          else if (i % peakHarmonic === 0) barHeight = amplitude * 0.9 / (i + 1);

          const grad = ctx.createLinearGradient(0, height, 0, height - barHeight);
          grad.addColorStop(0, '#005533');
          grad.addColorStop(0.6, '#00FFCC');
          grad.addColorStop(1, '#39FF14');

          ctx.fillStyle = grad;
          ctx.fillRect(i * barWidth + 2, height - barHeight, barWidth - 4, barHeight);
        }

      } else if (digitalMode === 'logic') {
        // Digital Logic Analyzer (Channels D0 - D3)
        const channels = 4;
        const channelHeight = height / channels;

        for (let ch = 0; ch < channels; ch++) {
          const chCenterY = ch * channelHeight + channelHeight / 2;
          ctx.strokeStyle = ch % 2 === 0 ? '#00FFCC' : '#39FF14';
          ctx.lineWidth = 1.5;
          ctx.beginPath();

          for (let x = 0; x < width; x += 10) {
            const rad = (x / width) * Math.PI * 2 * (frequency + ch) + (isDigitalRunning ? t : 0);
            const bit = Math.sin(rad) >= 0 ? 1 : 0;
            const y = chCenterY - (bit ? channelHeight * 0.3 : -channelHeight * 0.3);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Channel Label
          ctx.fillStyle = '#00FFCC';
          ctx.font = '9px monospace';
          ctx.fillText(`D${ch}`, 4, chCenterY - 4);
        }
      }

      if (isDigitalRunning) {
        t += 0.05;
      }
      animId = requestAnimationFrame(renderDigital);
    };

    renderDigital();

    return () => cancelAnimationFrame(animId);
  }, [waveType, frequency, amplitude, digitalMode, isDigitalRunning]);

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
    <div className={`max-w-6xl w-full mx-auto ${className}`}>
      <div className="bg-[#1C120C] border-2 border-[#D4AF37] p-4 sm:p-6 shadow-2xl space-y-5 relative rounded">
        
        {/* Corner Brass Rivets */}
        <span className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />
        <span className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />
        <span className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-[#D4AF37] border border-[#FFEAA7]" />

        {/* Master Console Header */}
        <div className="flex flex-wrap justify-between items-center border-b border-[#8A6B3F] pb-3 text-xs font-mono text-[#F4B942] gap-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#F4B942] animate-pulse" />
            <span className="font-bold tracking-wider font-cinzel text-[11px] sm:text-xs text-[#FFF1A0]">{title}</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-special">
            <span className="text-[#F4B942]">BENCH MODE: DUAL PARALLEL</span>
            <span className="text-[#D4AF37]">TIME/DIV: 1.0ms</span>
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

        {/* DUAL OSCILLOSCOPE DISPLAY BENCH GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* LEFT: ANALOG CRT OSCILLOSCOPE */}
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-[#120A05] px-3 py-1.5 border border-[#8A6B3F] text-[10px] font-mono text-[#F4B942]">
              <div className="flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-[#F4B942]" />
                <span className="font-bold font-cinzel text-[#FFF1A0]">ANALOG CRT OSCILLOSCOPE</span>
              </div>
              <span className="text-[9px] text-[#C5A059]">TEKTRONIX 465 (CRT)</span>
            </div>

            {/* Analog CRT Screen */}
            <div className="relative bg-[#0C0906] border-2 border-[#8A6B3F] rounded-none overflow-hidden crt-vignette shadow-inner">
              <canvas
                ref={analogCanvasRef}
                width={500}
                height={compact ? 170 : 200}
                className="w-full h-44 sm:h-52 block bg-[#120A05]"
              />
              {/* Moving CRT Scanline */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-[#F4B942]/30 to-transparent pointer-events-none animate-[scanline_4s_linear_infinite]" />

              {/* Analog Telemetry Overlay */}
              <div className="absolute top-2 left-2 bg-[#1C120C]/90 border border-[#8A6B3F] px-2 py-0.5 font-mono text-[9px] text-[#F4B942] space-y-0.5 shadow">
                <p>SIGNAL: {waveType.toUpperCase()}</p>
                <p>Vp-p: {(amplitude * 0.1).toFixed(1)}V</p>
                <p>BEAM: PHOSPHOR ON</p>
              </div>

              <div className="absolute bottom-2 right-2 bg-[#1C120C]/90 border border-[#8A6B3F] px-2 py-0.5 font-special text-[9px] text-[#D4AF37] flex items-center gap-1">
                <Activity className="w-3 h-3 text-[#FFF1A0] animate-pulse" />
                <span>ANALOG CRT SWEEP</span>
              </div>
            </div>
          </div>

          {/* RIGHT: DIGITAL STORAGE OSCILLOSCOPE (DSO) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-[#071714] px-3 py-1.5 border border-[#00FFCC]/50 text-[10px] font-mono text-[#00FFCC]">
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#00FFCC]" />
                <span className="font-bold font-cinzel text-[#39FF14]">DIGITAL STORAGE OSCILLOSCOPE</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsDigitalRunning(!isDigitalRunning)}
                  className="px-1.5 py-0.5 rounded border border-[#00FFCC] bg-[#004433] text-[#39FF14] text-[9px] font-bold flex items-center gap-1"
                >
                  {isDigitalRunning ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                  <span>{isDigitalRunning ? 'RUN' : 'STOP'}</span>
                </button>
              </div>
            </div>

            {/* Digital Screen */}
            <div className="relative bg-[#040C0A] border-2 border-[#00FFCC]/60 rounded-none overflow-hidden shadow-inner">
              <canvas
                ref={digitalCanvasRef}
                width={500}
                height={compact ? 170 : 200}
                className="w-full h-44 sm:h-52 block bg-[#05110E]"
              />

              {/* Digital Mode Selectors Sub-bar */}
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-[#040C0A]/90 border border-[#00FFCC]/40 p-1 font-mono text-[9px]">
                <button
                  onClick={() => setDigitalMode('sample')}
                  className={`px-1.5 py-0.5 rounded ${digitalMode === 'sample' ? 'bg-[#00FFCC] text-[#040C0A] font-bold' : 'text-[#00FFCC] hover:bg-[#004433]'}`}
                >
                  SAMPLE
                </button>
                <button
                  onClick={() => setDigitalMode('fft')}
                  className={`px-1.5 py-0.5 rounded ${digitalMode === 'fft' ? 'bg-[#00FFCC] text-[#040C0A] font-bold' : 'text-[#00FFCC] hover:bg-[#004433]'}`}
                >
                  FFT
                </button>
                <button
                  onClick={() => setDigitalMode('logic')}
                  className={`px-1.5 py-0.5 rounded ${digitalMode === 'logic' ? 'bg-[#00FFCC] text-[#040C0A] font-bold' : 'text-[#00FFCC] hover:bg-[#004433]'}`}
                >
                  LOGIC D0-D3
                </button>
              </div>

              {/* Digital Telemetry Overlay */}
              <div className="absolute bottom-2 left-2 bg-[#040C0A]/90 border border-[#00FFCC]/40 px-2 py-0.5 font-mono text-[9px] text-[#39FF14] flex items-center gap-2">
                <span>RATE: 1.0 GS/s</span>
                <span>MEM: 14.0 Mpts</span>
                <span>TRIG: AUTO</span>
              </div>

              <div className="absolute bottom-2 right-2 bg-[#040C0A]/90 border border-[#00FFCC]/40 px-2 py-0.5 font-special text-[9px] text-[#00FFCC] flex items-center gap-1">
                <Binary className="w-3 h-3 text-[#39FF14] animate-pulse" />
                <span>DSO SAMPLE ACTIVE</span>
              </div>
            </div>
          </div>

        </div>

        {/* Master Bench Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs bg-[#120A05] p-3.5 border border-[#8A6B3F] rounded">
          
          {/* Waveform Selector */}
          <div className="space-y-1">
            <label className="text-[#D4AF37] font-bold block text-[11px] font-special">&gt; BENCH WAVEFORM TYPE:</label>
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
              <span className="font-bold">&gt; TIME/DIV (SWEEP FREQ):</span>
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
              <span className="font-bold">&gt; VOLTS/DIV (AMPLITUDE):</span>
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
