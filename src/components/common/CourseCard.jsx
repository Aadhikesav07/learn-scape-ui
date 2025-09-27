import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => (
  <div className="rounded shadow bg-white p-4 flex flex-col">
    <img src={course.thumbnail} className="h-32 object-cover mb-3" alt="thumbnail"/>
    <div className="font-bold text-lg mb-1">{course.title}</div>
    <div className="text-sm text-gray-700">By {course.instructor}</div>
    <div className="text-gray-600 text-sm mt-1">{course.description}</div>
    <Link to={`/course/${course.id}`} className="mt-4 bg-blue-500 text-white px-3 py-1 rounded text-center">
      View Details
    </Link>
  </div>
);

export default CourseCard;
