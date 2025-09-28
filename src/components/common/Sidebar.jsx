import { NavLink } from "react-router-dom"

export default function Sidebar({ course }) {
  return (
    <aside className="w-64 bg-gray-100 p-4 h-screen">
      <h3 className="font-bold mb-4">{course?.title || "Course"}</h3>
      {course?.modules?.map((m) => (
        <div key={m.id} className="mb-3">
          <p className="font-semibold">{m.title}</p>
          <ul className="ml-3 mt-1">
            {m.lectures.map((l) => (
              <li key={l.id}>
                <NavLink
                  to={`/learning/${course.id}?lecture=${l.id}`}
                  className="block hover:underline"
                >
                  {l.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
