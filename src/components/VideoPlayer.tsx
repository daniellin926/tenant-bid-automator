
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
    
    // Removed auto-ending timer to allow only manual navigation
  }, [playing, demoStarted]);

  return (
    <div className="relative w-full h-full bg-white">
      {demoStarted && <DemoVideo currentStep={currentStep} />}
    </div>
  );
};

export default VideoPlayer;
