import React from 'react';
import { Section, Option } from '../types';
import { QuestionCard } from './QuestionCard';

interface SurveySectionProps {
  section: Section;
  answers: Record<string, Option>;
  onAnswerChange: (questionId: string, value: Option) => void;
}

export function SurveySection({ section, answers, onAnswerChange }: SurveySectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-cyan-300 border-b border-gray-700 pb-2">
        {section.title}
      </h2>
      <div className="space-y-6">
        {section.questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            value={answers[question.id] || null}
            onChange={(value) => onAnswerChange(question.id, value)}
          />
        ))}
      </div>
    </div>
  );
}