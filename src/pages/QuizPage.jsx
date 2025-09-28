import { useParams } from "react-router-dom"
import { useStore } from "../store/useStore"
import QuizComponent from "../components/quiz/QuizComponent"

export default function QuizPage() {
  const { id } = useParams()
  const { quizzes } = useStore()
  const quiz = quizzes.find((q) => q.id === parseInt(id))

  if (!quiz) return <p>Quiz not found</p>

  return (
    <div className="container mx-auto p-6">
      <QuizComponent quiz={quiz} />
    </div>
  )
}
