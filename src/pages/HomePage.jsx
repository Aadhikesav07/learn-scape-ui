import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";
import CourseCard from "../components/common/CourseCard";

const HomePage = () => {
  const { courses } = useStore();
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to LearnScape</h1>
      <div className="mb-6 flex flex-col md:flex-row md:justify-between items-center">
        <Link to="/catalog" className="bg-blue-500 text-white px-6 py-2 rounded mb-2 md:mb-0">
          Browse Courses
        </Link>
        <Link to="/dashboard/instructor" className="text-blue-600">
          Instructor Area
        </Link>
      </div>
      <h2 className="text-xl font-semibold mb-4">Featured Courses</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => <CourseCard key={course.id} course={course} />)}
      </div>
    </div>
  );
};

export default HomePage;
