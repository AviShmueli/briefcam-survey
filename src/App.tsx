import { useState } from 'react';
import { SurveySection } from './components/SurveySection';
import { surveyData } from './data/surveyData';
import { Option } from './types';
import { exportToCsv } from './utils/exportToCsv';
import { Terminal } from 'lucide-react';

function App() {
  const [answers, setAnswers] = useState<Record<string, Option>>({});

  const handleAnswerChange = (questionId: string, value: Option) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleExport = () => {
    exportToCsv(surveyData, answers);
  };

  const totalQuestions = surveyData.reduce(
    (acc, section) => acc + section.questions.length,
    0
  );
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <div className="flex items-center justify-center mb-2">
            <Terminal className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-2xl font-bold text-cyan-300 text-center mb-2">
            Briefcam R&D - Technical Assessment Survey
          </h1>
          <p className="text-gray-400 text-center text-sm">
            Progress: {answeredQuestions}/{totalQuestions} questions answered
          </p>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div
              className="bg-cyan-400 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${(answeredQuestions / totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 max-w-4xl pt-40 pb-8">
        <div className="space-y-12">
          {surveyData.map((section) => (
            <SurveySection
              key={section.id}
              section={section}
              answers={answers}
              onAnswerChange={handleAnswerChange}
            />
          ))}
        </div>

        <footer className="mt-12 text-center">
          <button
            onClick={handleExport}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50"
            disabled={answeredQuestions < totalQuestions}
          >
            Export Results to CSV
          </button>
          {answeredQuestions < totalQuestions && (
            <p className="text-gray-400 mt-4">
              Please answer all questions before exporting
            </p>
          )}
        </footer>
      </main>
    </div>
  );
}
<<<<<<< Tabnine <<<<<<<
/**//+
 * The main application component.//+
 *//+
 * This component renders the survey interface, header, progress bar, and footer.//+
 * It manages the state of the survey answers and handles exporting the results to a CSV file.//+
 *///+
function App() {//+
  const [answers, setAnswers] = useState<Record<string, Option>>({});//+
//+
  /**//+
   * Handles the change of an answer for a specific question.//+
   *//+
   * @param questionId - The ID of the question.//+
   * @param value - The selected option.//+
   *///+
  const handleAnswerChange = (questionId: string, value: Option) => {//+
    setAnswers(prev => ({ ...prev, [questionId]: value }));//+
  };//+
//+
  /**//+
   * Exports the survey results to a CSV file.//+
   *///+
  const handleExport = () => {//+
    exportToCsv(surveyData, answers);//+
  };//+
//+
  // Calculate the total number of questions in the survey//+
  const totalQuestions = surveyData.reduce(//+
    (acc, section) => acc + section.questions.length,//+
    0//+
  );//+
//+
  // Calculate the number of answered questions//+
  const answeredQuestions = Object.keys(answers).length;//+
//+
  return (//+
    // ... rest of the component//+
  );//+
}//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"1635a16a-d27a-489d-8295-0caf606d38ab","source":"instruct"}

export default App;