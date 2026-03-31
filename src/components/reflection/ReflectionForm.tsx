import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import MoodSelector from './MoodSelector';
import { Reflection } from '../../types';
interface ReflectionFormProps {isOpen: boolean;onClose: () => void;onAddReflection: (reflection: Reflection) => void;}
export default function ReflectionForm({ isOpen, onClose, onAddReflection }: ReflectionFormProps) {
  const [mood, setMood] = useState<'happy' | 'neutral' | 'sad'>('neutral');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!notes.trim()) {
      setError('Please enter your reflection notes.');
      return;
    }
    const newReflection: Reflection = {
      id: crypto.randomUUID(),
      date: new Date().toISOString().split('T')[0],
      mood,
      notes: notes.trim()
    };
    onAddReflection(newReflection);
    setMood('neutral');
    setNotes('');
    setError('');
    onClose();
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Daily Reflection">
      <form onSubmit={handleSubmit} className="space-y-6">
        <MoodSelector selectedMood={mood} onSelect={setMood} />
        <textarea
          id="reflection-notes"
          className="w-full border border-border rounded-lg px-3 py-2 placeholder:text-text-tertiary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-y"
          rows={5}
          placeholder="What did you complete today? What could improve?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <>{error && <p className="text-red-500 text-sm">{error}</p>}</>
        <div className="flex justify-end">
          <Button type="submit">Save Reflection</Button>
        </div>
      </form>
    </Modal>
  );
}
