import { useState } from "react"

export default function QuizComponent({ quiz }) {
  const [answers, setAnswers] = useState({})

  const submit = () => {
    alert("Submitted answers: " + JSON.stringify(answers))
  }

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="font-bold text-xl mb-4">{quiz.title}</h2>
      {quiz.questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p>{q.text}</p>
          {q.options.map((opt, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={q.id}
                onChange={() => setAnswers({ ...answers, [q.id]: opt })}
              />{" "}
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={submit} className="bg-blue-600 text-white px-4 py-1 rounded">
        Submit
      </button>
    </div>
  )
}
