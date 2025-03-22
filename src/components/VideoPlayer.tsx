
import { useState, useEffect } from 'react';
import DemoVideo from './DemoVideo';

interface VideoPlayerProps {
  playing: boolean;
  currentStep?: number;
  onEnded?: () => void;
}

const VideoPlayer = ({ playing, currentStep = 0, onEnded }: VideoPlayerProps) => {
  const [demoStarted, setDemoStarted] = useState(false);
  
  useEffect(() => {
    if (playing && !demoStarted) {
      setDemoStarted(true);
    }
    
    // Only set up auto-ending timer if no manual step control is provided
    let timer: NodeJS.Timeout;
    if (playing && onEnded && !currentStep) {
      timer = setTimeout(() => {
        onEnded();
      }, 30000); // 30 seconds demo
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [playing, onEnded, demoStarted, currentStep]);

  return (
    <div className="relative w-full h-full bg-white">
      {demoStarted && <DemoVideo currentStep={currentStep} />}
    </div>
  );
};

export default VideoPlayer;
