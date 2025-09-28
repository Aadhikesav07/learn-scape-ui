import { useParams } from "react-router-dom"
import { useStore } from "../store/useStore"
import Sidebar from "../components/common/Sidebar"
import LearningPlayer from "../components/course/LearningPlayer"

export default function LearningPage() {
  const { id } = useParams()
  const { courses } = useStore()
  const course = courses.find((c) => c.id === parseInt(id))
  const firstLecture = course?.modules?.[0]?.lectures?.[0]

  if (!course) return <p>Course not found.</p>

  return (
    <div className="flex">
      <Sidebar course={course} />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
        {firstLecture && <LearningPlayer url={firstLecture.videoUrl} />}
      </div>
    </div>
  )
}
