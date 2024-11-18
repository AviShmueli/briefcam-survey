import { Section, Answer } from '../types';

export function exportToCsv(sections: Section[], answers: Record<string, Answer['value']>): void {
  const rows: string[] = ['Section,Term,Answer'];
  
  sections.forEach(section => {
    section.questions.forEach(question => {
      const answer = answers[question.id] || 'Unanswered';
      rows.push(`"${section.title}","${question.term}","${answer}"`);
    });
  });

  const csvContent = rows.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', 'survey_results.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}