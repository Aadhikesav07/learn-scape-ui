import { useState } from 'react';
import { useStore } from '../../store/useStore';

export default function QuizComponent({ quiz, courseId }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const { submitQuiz } = useStore();

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setAnswers(prev => ({ ...prev, [questionIndex]: selectedOption }));
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    quiz.questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) calculatedScore += 1;
    });
    const finalScore = (calculatedScore / quiz.questions.length) * 100;
    setScore(finalScore);
    setSubmitted(true);
    submitQuiz(courseId, quiz.id, finalScore);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-green-800 mb-2">✅ Quiz Submitted!</h3>
        <p className="text-lg">Your Score: <span className="font-bold text-green-700">{score.toFixed(1)}%</span></p>
        {score >= 70 ? (
          <p className="mt-3 text-green-700 font-medium">🎉 Congratulations! You’re eligible for a certificate.</p>
        ) : (
          <p className="mt-3 text-yellow-700">You need at least 70% to qualify for a certificate.</p>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">{quiz.title}</h2>
      {quiz.questions.map((q, idx) => (
        <div key={idx} className="mb-6 p-4 border rounded">
          <p className="font-medium mb-3">{idx + 1}. {q.q}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => (
              <label key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`q${idx}`}
                  value={i}
                  onChange={() => handleAnswerChange(idx, i)}
                  className="form-radio text-blue-600"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length !== quiz.questions.length}
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 disabled:bg-gray-400 font-medium mt-4"
      >
        Submit Quiz
      </button>
    </div>
  );
}
