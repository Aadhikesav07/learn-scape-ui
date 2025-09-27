import { NavLink } from 'react-router-dom';

export default function Sidebar({ course }) {
  if (!course) return null;

  return (
    <aside className="w-64 bg-gray-100 p-4 h-screen sticky top-0 overflow-y-auto">
      <h3 className="font-bold text-lg mb-4">Course Content</h3>
      {course.modules.map(module => (
        <div key={module.id} className="mb-6">
          <h4 className="font-semibold text-gray-800">{module.title}</h4>
          <ul className="ml-4 mt-2 space-y-2">
            {module.lectures.map(lecture => (
              <li key={lecture.id}>
                <NavLink
                  to={`/learning/${course.id}/lecture/${lecture.id}`}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded text-sm ${isActive ? 'bg-blue-200 text-blue-800 font-medium' : 'hover:bg-gray-200'}`
                  }
                >
                  ▶ {lecture.title}
                </NavLink>
              </li>
            ))}
            {module.quizzes.map(quiz => (
              <li key={quiz.id}>
                <NavLink
                  to={`/learning/${course.id}/quiz/${quiz.id}`}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded text-sm ${isActive ? 'bg-blue-200 text-blue-800 font-medium' : 'hover:bg-gray-200'}`
                  }
                >
                  📝 {quiz.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
