import { useStore } from '../../store/useStore';

export default function ProfileDashboard() {
  const { user } = useStore();

  if (!user) return <div>Please login to view profile.</div>;

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <div className="bg-white rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold mb-6">👤 User Profile</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600">Name</label>
            <p className="font-medium">{user.name}</p>
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <p className="font-medium">{user.email}</p>
          </div>
          <div>
            <label className="block text-gray-600">Role</label>
            <p className="font-medium capitalize">{user.role}</p>
          </div>
        </div>
        <button className="mt-6 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
