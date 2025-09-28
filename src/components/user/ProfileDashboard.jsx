import { useStore } from "../../store/useStore"

export default function ProfileDashboard() {
  const { user, courses } = useStore()

  return (
    <div>
      <div className="bg-white p-6 mb-6 rounded shadow">
        <h2 className="text-xl font-bold">Profile</h2>
        <p>{user?.name}</p>
        <p>{user?.email}</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-3">My Courses</h2>
        <ul>
          {courses.map((c) => <li key={c.id}>{c.title}</li>)}
        </ul>
      </div>
    </div>
  )
}
