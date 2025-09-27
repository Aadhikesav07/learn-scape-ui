import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { mockCourses } from '../../utils/mockData';

export default function CourseDetails() {
  const { courseId } = useParams();
  const { enrollInCourse, enrolledCourses } = useStore();

  const course = mockCourses.find(c => c.id == courseId);
  if (!course) return <div className="container mx-auto py-10">Course not found.</div>;

  const isEnrolled = enrolledCourses.some(c => c.id == courseId);

  return (
    <div className="container mx-auto py-10 max-w-5xl">
      <div className="bg-white rounded-lg shadow p-8">
        <img src={course.thumbnail} alt={course.title} className="w-full h-64 object-cover rounded mb-6" />
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <p className="text-gray-600 mb-2">Instructor: <span className="font-medium">{course.instructor}</span></p>
        <p className="text-gray-800 mb-6">{course.description}</p>

        <h2 className="text-xl font-bold mb-4">Syllabus</h2>
        <ul className="list-disc pl-6 mb-8 space-y-1">
          {course.syllabus.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {!isEnrolled ? (
          <button
            onClick={() => enrollInCourse(course.id)}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 font-medium"
          >
            Enroll Now
          </button>
        ) : (
          <button className="bg-green-600 text-white px-6 py-3 rounded cursor-not-allowed font-medium">
            Already Enrolled
          </button>
        )}

        {isEnrolled && (
          <Link
            to={`/learning/${course.id}`}
            className="ml-4 bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 font-medium inline-block"
          >
            Start Learning
          </Link>
        )}
      </div>
    </div>
  );
}
