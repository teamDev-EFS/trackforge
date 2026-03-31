import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';

export default function GoalProgress() {
  // Example static progress for demonstration
  const progress = 65;

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Goal Progress</h3>
      <ProgressBar progress={progress} />
      <p className="text-text-secondary text-sm mt-2">You have completed {progress}% of your current goal.</p>
    </Card>
  );
}
