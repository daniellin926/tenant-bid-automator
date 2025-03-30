
import { X } from 'lucide-react';
import VideoPlayer from '../VideoPlayer';

interface VideoOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoOverlay = ({ isOpen, onClose }: VideoOverlayProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden">
        <button 
          className="absolute top-4 right-4 z-10 rounded-full h-10 w-10 flex items-center justify-center bg-black/50 text-white hover:bg-black/70"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
        <VideoPlayer playing={isOpen} onEnded={onClose} />
      </div>
    </div>
  );
};

export default VideoOverlay;
