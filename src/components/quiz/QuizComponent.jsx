import React, { useState } from "react";

const sampleQuiz = [
  {
    id: 1,
    question: "Which library is used for state management?",
    options: ["Redux", "Express", "MongoDB", "Tailwind CSS"],
    answer: 0
  },
  {
    id: 2,
    question: "What is React?",
    options: ["Database", "UI Library", "Backend framework", "Browser"],
    answer: 1
  }
];

const QuizComponent = () => {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleChange = (qId, optionIdx) => {
    setResponses({ ...responses, [qId]: optionIdx });
  };

  const submitQuiz = () => {
    let scr = 0;
    sampleQuiz.forEach(q => {
      if (responses[q.id] === q.answer) scr++;
    });
    setScore(scr);
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded shadow p-6 max-w-lg mx-auto mt-8">
      <h2 className="font-bold text-xl mb-4">Quiz</h2>
      {sampleQuiz.map((q, idx) => (
        <div key={q.id} className="mb-4">
          <div className="font-medium">{idx + 1}. {q.question}</div>
          <div className="mt-2">
            {q.options.map((opt, i) => (
              <label key={i} className="block px-2 py-1 cursor-pointer">
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value={i}
                  checked={responses[q.id] === i}
                  disabled={submitted}
                  onChange={() => handleChange(q.id, i)}
                  className="mr-2"
                />
                {opt}
              </label>
            ))}
          </div>
        </div>
      ))}
      {!submitted ? (
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={submitQuiz}>Submit</button>
      ) : (
        <div className="mt-4 text-lg">Score: {score} / {sampleQuiz.length}</div>
      )}
    </div>
  );
};

export default QuizComponent;
