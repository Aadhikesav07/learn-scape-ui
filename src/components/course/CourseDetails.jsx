import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { mockCourses } from '../../utils/mockData';

export default function CourseDetails() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, enrollInCourse } = useStore();

  const course = mockCourses.find(c => c.id == courseId);

  if (!course) {
    return <div className="container mx-auto py-10 text-center">Course not found.</div>;
  }

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    enrollInCourse(course.id);
    navigate(`/learning/${course.id}`);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
            <p className="text-lg text-gray-700 mb-4">Instructor: <span className="font-medium">{course.instructor}</span></p>
            <p className="text-gray-800 mb-6 leading-relaxed">{course.description}</p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">📝 Syllabus</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {course.syllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleEnroll}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition transform hover:scale-105"
            >
              {user ? 'Enroll Now' : 'Login to Enroll'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
