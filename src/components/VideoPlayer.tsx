
import { useState, useEffect } from 'react';
import DemoVideo from './DemoVideo';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoPlayerProps {
  playing: boolean;
  currentStep?: number;
  onEnded?: () => void;
}

const VideoPlayer = ({ playing, currentStep = 0, onEnded }: VideoPlayerProps) => {
  const [demoStarted, setDemoStarted] = useState(false);
  const [step, setStep] = useState(currentStep);
  const maxSteps = 5;
  
  useEffect(() => {
    if (playing && !demoStarted) {
      setDemoStarted(true);
    }
    
    setStep(currentStep);
  }, [playing, demoStarted, currentStep]);

  const handleNext = () => {
    if (step < maxSteps) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="relative w-full h-full bg-white flex flex-col">
      <div className="flex-1 overflow-hidden">
        {demoStarted && <DemoVideo currentStep={step} />}
      </div>
      
      {demoStarted && (
        <div className="p-4 border-t flex justify-between items-center bg-gray-50">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={step <= 1}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="text-sm text-gray-500">
            Step {step} of {maxSteps}
          </div>
          
          <Button 
            onClick={handleNext}
            disabled={step >= maxSteps}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
