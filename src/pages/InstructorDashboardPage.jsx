import React from "react";
import { useStore } from "../store/useStore";
import CourseCard from "../components/common/CourseCard";

const InstructorDashboardPage = () => {
  const { courses } = useStore();
  // For demo: all courses
  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Instructor Dashboard</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {courses.map(course =>
          <CourseCard key={course.id} course={course}/>
        )}
      </div>
      <div className="mt-6">[Upload new course functionality will appear here]</div>
    </div>
  );
};

export default InstructorDashboardPage;
