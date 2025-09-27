import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../store/useStore";

const Sidebar = ({ courseId }) => {
  const { courses } = useStore();
  const course = courses.find(c => c.id === Number(courseId));

  if (!course) return null;

  return (
    <aside className="bg-gray-100 p-4 w-60">
      <div className="font-semibold mb-2 text-xl">{course.title}</div>
      <nav>
        {course.syllabus.map((mod, idx) =>
          <div key={idx} className="mt-4">
            <div className="text-lg text-blue-600">{mod.module}</div>
            <ul className="ml-2">
              {mod.lectures.map((lec,i) =>
                <li key={i} className="py-1">
                  <Link to={`/learning/${course.id}#${mod.module}-${lec}`}>{lec}</Link>
                </li>
              )}
            </ul>
          </div>
        )}
        <div className="mt-4">
          <Link to={`/quiz/${course.id}/1`} className="text-blue-500">Quiz</Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
