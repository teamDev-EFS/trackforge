import Button from '../ui/Button';
import { Play, Pause, RotateCw } from 'lucide-react';

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export default function TimerControls({ isRunning, onStart, onPause, onReset }: TimerControlsProps) {
  return (
    <div className="flex gap-4 justify-center mt-6">
      {isRunning ? (
        <Button variant="secondary" icon={Pause} onClick={onPause} aria-label="Pause timer">
          Pause
        </Button>
      ) : (
        <Button variant="primary" icon={Play} onClick={onStart} aria-label="Start timer">
          Start
        </Button>
      )}
      <Button variant="secondary" icon={RotateCw} onClick={onReset} aria-label="Reset timer">
        Reset
      </Button>
    </div>
  );
}
