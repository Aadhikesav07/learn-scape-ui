import { useStore } from "../store/useStore"
import CourseCard from "../components/common/CourseCard"

export default function HomePage() {
  const { courses } = useStore()

  return (
    <div>
      <section className="text-center py-16 bg-indigo-600 text-white">
        <h1 className="text-4xl font-bold">Welcome to LearnScape</h1>
        <p className="mt-2">Learn. Grow. Achieve.</p>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {courses.map((c) => <CourseCard key={c.id} course={c} />)}
      </section>
    </div>
  )
}
