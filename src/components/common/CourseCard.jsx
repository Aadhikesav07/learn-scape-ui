import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border">
      <img src={course.thumbnail} alt={course.title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="font-bold text-lg line-clamp-1">{course.title}</h3>
        <p className="text-gray-600 text-sm mt-1">by {course.instructor}</p>
        <p className="mt-3 text-gray-700 text-sm line-clamp-2">{course.description}</p>
        <Link to={`/course/${course.id}`} className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition">
          View Details
        </Link>
      </div>
    </div>
  );
}
