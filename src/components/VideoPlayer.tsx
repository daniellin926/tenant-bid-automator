
import { useState, useEffect } from 'react';
import DemoVideo from './DemoVideo';

interface VideoPlayerProps {
  playing: boolean;
  onEnded?: () => void;
}

const VideoPlayer = ({ playing, onEnded }: VideoPlayerProps) => {
  const [demoStarted, setDemoStarted] = useState(false);
  
  useEffect(() => {
    if (playing && !demoStarted) {
      setDemoStarted(true);
    }
    
    // Simulate video ending after 30 seconds
    let timer: NodeJS.Timeout;
    if (playing && onEnded) {
      timer = setTimeout(() => {
        onEnded();
      }, 30000); // 30 seconds demo
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [playing, onEnded, demoStarted]);

  return (
    <div className="relative w-full h-full bg-white">
      {demoStarted && <DemoVideo />}
    </div>
  );
};

export default VideoPlayer;
