import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import LearningPlayer from "../components/course/LearningPlayer";

const LearningPage = () => {
  const { courseId } = useParams();

  // For demo: static lecture
  return (
    <div className="flex">
      <Sidebar courseId={courseId} />
      <div className="flex-1 p-6">
        <LearningPlayer lectureTitle="Sample Lecture" />
      </div>
    </div>
  );
};

export default LearningPage;
