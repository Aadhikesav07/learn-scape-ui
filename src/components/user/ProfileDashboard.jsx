import React from "react";
import { useStore } from "../../store/useStore";
import { Link } from "react-router-dom";

const ProfileDashboard = () => {
  const { user, enrolledCourses, courses } = useStore();
  return (
    <div className="bg-white rounded shadow p-6 max-w-xl mx-auto mt-8">
      <img src={user.profilePic} className="h-16 w-16 rounded-full mb-3" alt="profile"/>
      <div className="text-xl font-bold">{user.name}</div>
      <div className="text-gray-700 mb-2">{user.email}</div>
      <h3 className="mt-4 font-semibold">Enrolled Courses</h3>
      <ul>
        {enrolledCourses.map((cid) =>
          <li key={cid}>
            <Link to={`/course/${cid}`} className="text-blue-700">
              {courses.find(c => c.id === cid)?.title || "Untitled"}
            </Link>
          </li>
        )}
      </ul>
      <Link className="mt-4 block text-blue-500" to={`/certificate/1`}>View Certificate [sample]</Link>
    </div>
  );
};

export default ProfileDashboard;
