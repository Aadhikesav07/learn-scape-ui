import { useStore } from "../store/useStore"

export default function InstructorDashboardPage() {
  const { courses } = useStore()

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Instructor Dashboard</h1>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-3">Your Courses</h2>
        <ul>
          {courses.map((c) => (
            <li key={c.id} className="mb-2">📘 {c.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
