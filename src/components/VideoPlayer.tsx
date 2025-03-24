
import { useState, useEffect } from 'react';
import DemoVideo from './DemoVideo';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface VideoPlayerProps {
  playing: boolean;
  currentStep?: number;
  onEnded?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

const VideoPlayer = ({ playing, currentStep = 0, onEnded, onPrevious, onNext }: VideoPlayerProps) => {
  const [demoStarted, setDemoStarted] = useState(false);
  const [step, setStep] = useState(currentStep);
  const maxSteps = 5;
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (playing && !demoStarted) {
      setDemoStarted(true);
    }
    
    setStep(currentStep);
  }, [playing, demoStarted, currentStep]);

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      <div className="flex-1 overflow-hidden">
        {demoStarted && <DemoVideo currentStep={step} />}
      </div>
      
      {demoStarted && (
        <div className="p-2 md:p-4 border-t flex justify-between items-center bg-gray-50">
          <Button 
            variant="outline" 
            onClick={onPrevious}
            disabled={step <= 1}
            size={isMobile ? "sm" : "default"}
            className="text-xs md:text-sm"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
            {isMobile ? "Prev" : "Previous Step"}
          </Button>
          
          <div className="text-xs md:text-sm text-gray-500">
            Step {step}/{maxSteps}
          </div>
          
          {step < maxSteps && (
            <Button 
              onClick={onNext}
              disabled={step >= maxSteps}
              size={isMobile ? "sm" : "default"}
              className="text-xs md:text-sm"
            >
              {isMobile ? "Next" : "Next Step"}
              <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-1 md:ml-2" />
            </Button>
          )}
          {step >= maxSteps && (
            <div style={{ width: isMobile ? '60px' : '107px' }}></div> // Empty space to maintain layout when Next button is hidden
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
