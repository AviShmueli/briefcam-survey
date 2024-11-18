export type Option = 'None-existence' | 'Preliminary' | 'Minimal' | 'Advanced' | 'Excellent';

export interface Question {
  id: string;
  term: string;
  explanation: string;
}

export interface Answer {
  questionId: string;
  value: Option;
}

export interface Section {
  id: string;
  title: string;
  questions: Question[];
}