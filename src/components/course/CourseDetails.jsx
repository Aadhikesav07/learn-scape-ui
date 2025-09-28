export default function CourseDetails({ course }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold">{course.title}</h1>
      <p className="text-gray-700">{course.description}</p>
    </div>
  )
}
