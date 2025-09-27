import React from "react";
import { useParams, Link } from "react-router-dom";
import { useStore } from "../../store/useStore";

const CourseDetails = () => {
  const { courseId } = useParams();
  const { courses, enrolledCourses, enrollCourse } = useStore();
  const course = courses.find(c => c.id === Number(courseId));
  if (!course) return <div>Course not found.</div>;

  const enrolled = enrolledCourses.includes(course.id);

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded shadow">
      <img src={course.thumbnail} alt="thumbnail" className="h-36 mb-4"/>
      <h2 className="text-2xl font-bold">{course.title}</h2>
      <p className="text-gray-700 mt-2">Instructor: {course.instructor}</p>
      <div className="mt-4 text-gray-800">{course.description}</div>
      <h3 className="mt-4 font-semibold">Syllabus:</h3>
      {course.syllabus.map((mod, idx) => (
        <div key={idx} className="mb-2">
          <div className="font-medium text-blue-600">{mod.module}:</div>
          <ul className="ml-4">
            {mod.lectures.map((lec, i) => <li key={i}>{lec}</li>)}
          </ul>
        </div>
      ))}
      <button
        className={`mt-4 px-4 py-2 rounded text-white ${enrolled ? "bg-green-500" : "bg-blue-500"}`}
        onClick={() => !enrolled && enrollCourse(course.id)}
        disabled={enrolled}
      >
        {enrolled ? "Enrolled" : "Enroll"}
      </button>
      {enrolled && (
        <Link className="ml-4 text-blue-600" to={`/learning/${course.id}`}>Go to Course</Link>
      )}
    </div>
  );
};

export default CourseDetails;
