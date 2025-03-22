
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

interface DemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoDialog = ({ isOpen, onClose }: DemoDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-black">
        <DialogHeader className="absolute top-0 right-0 z-10 p-4">
          <DialogClose className="rounded-full h-8 w-8 flex items-center justify-center bg-black/50 text-white hover:bg-black/70">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        <div className="w-full aspect-video">
          <VideoPlayer playing={isOpen} onEnded={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoDialog;
