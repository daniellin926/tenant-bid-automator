
import { useState, useEffect } from 'react';
import DemoVideo from './DemoVideo';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
        <div className="p-4 border-t flex justify-between items-center bg-gray-50">
          <Button 
            variant="outline" 
            onClick={onPrevious}
            disabled={step <= 1}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous Step
          </Button>
          
          <div className="text-sm text-gray-500">
            Step {step} of {maxSteps}
          </div>
          
          {step < maxSteps && (
            <Button 
              onClick={onNext}
              disabled={step >= maxSteps}
            >
              Next Step
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
          {step >= maxSteps && (
            <div style={{ width: '107px' }}></div> // Empty space to maintain layout when Next button is hidden
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
