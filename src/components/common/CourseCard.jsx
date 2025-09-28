import { Link } from "react-router-dom"

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <img src={course.thumbnail} alt="" className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{course.title}</h3>
        <p className="text-sm text-gray-600">By {course.instructor}</p>
        <Link
          to={`/learning/${course.id}`}
          className="mt-3 inline-block bg-blue-600 text-white px-3 py-1 rounded"
        >
          View Course
        </Link>
      </div>
    </div>
  )
}
