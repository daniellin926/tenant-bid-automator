
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { useIsMobile } from "@/hooks/use-mobile";

interface DemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoDialog = ({ isOpen, onClose }: DemoDialogProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] max-h-[90vh] p-0 overflow-hidden bg-black">
        <DialogHeader className="absolute top-0 right-0 z-10 p-2 md:p-4">
          <DialogClose className="rounded-full h-6 w-6 md:h-8 md:w-8 flex items-center justify-center bg-black/50 text-white hover:bg-black/70">
            <X className="h-3 w-3 md:h-4 md:w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="w-full aspect-video max-h-[70vh] md:max-h-[80vh]">
          <VideoPlayer playing={isOpen} onEnded={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
