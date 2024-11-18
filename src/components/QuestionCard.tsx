import React from 'react';
import { Question, Option } from '../types';

const optionEmojis: Record<Option, string> = {
  'None-existence': '❌',
  'Preliminary': '🌱',
  'Minimal': '⭐',
  'Advanced': '🚀',
  'Excellent': '💫'
};

const options: Option[] = ['None-existence', 'Preliminary', 'Minimal', 'Advanced', 'Excellent'];

interface QuestionCardProps {
  question: Question;
  value: Option | null;
  onChange: (value: Option) => void;
}

export function QuestionCard({ question, value, onChange }: QuestionCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 mb-6 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">{question.term}</h3>
      <p className="text-gray-400 text-sm mb-6">{question.explanation}</p>
      
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`emoji-option ${value === option ? 'selected' : ''}`}
            type="button"
            aria-label={option}
          >
            <span className="emoji-icon" role="img" aria-hidden="true">
              {optionEmojis[option]}
            </span>
            <span className="emoji-label">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}