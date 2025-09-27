import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border">
      <img
        src={course.thumbnail}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
        <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        <Link
          to={`/course/${course.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
