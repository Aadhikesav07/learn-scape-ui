import { NavLink } from 'react-router-dom';

export default function Sidebar({ course }) {
  if (!course) return null;

  return (
    <aside className="w-64 bg-gray-50 p-4 h-screen sticky top-0 overflow-y-auto border-r">
      <h3 className="font-bold text-lg mb-4 border-b pb-2">📚 Course Content</h3>
      {course.modules.map(module => (
        <div key={module.id} className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-2">{module.title}</h4>
          <ul className="space-y-1">
            {module.lectures.map(lecture => (
              <li key={lecture.id}>
                <NavLink
                  to={`/learning/${course.id}/lecture/${lecture.id}`}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded text-sm ${
                      isActive
                        ? 'bg-blue-100 text-blue-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`
                  }
                >
                  ▶️ {lecture.title}
                </NavLink>
              </li>
            ))}
            {module.quizzes.map(quiz => (
              <li key={quiz.id}>
                <NavLink
                  to={`/learning/${course.id}/quiz/${quiz.id}`}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded text-sm ${
                      isActive
                        ? 'bg-blue-100 text-blue-800 font-medium'
                        : 'text-gray-700 hover:bg-gray-200'
                    }`
                  }
                >
                  ❓ {quiz.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
