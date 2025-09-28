import { useStore } from "../store/useStore"
import CourseCard from "../components/common/CourseCard"

export default function CourseCatalogPage() {
  const { courses } = useStore()

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  )
}
