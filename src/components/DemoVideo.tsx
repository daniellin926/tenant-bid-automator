
import { useRef, useEffect, useState } from 'react';
import DemoVideoContent from './DemoVideoContent';

interface DemoVideoProps {
  currentStep?: number;
}

const DemoVideo = ({ currentStep = 0 }: DemoVideoProps) => {
  const [recording, setRecording] = useState<MediaRecorder | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This is a simulated demo video - in a real app,
    // you would use a pre-recorded video instead of this simulation
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Set canvas size
    canvas.width = 1280;
    canvas.height = 720;
    
    return () => {
      if (recording) {
        recording.stop();
      }
    };
  }, [recording]);
  
  return (
    <div className="w-full h-full bg-gray-50 overflow-auto">
      <canvas ref={canvasRef} className="hidden" />
      <div ref={contentRef} className="w-full h-full">
        <DemoVideoContent currentStep={currentStep} />
      </div>
    </div>
  );
};

export default DemoVideo;
