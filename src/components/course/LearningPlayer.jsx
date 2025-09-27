import { useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import { useParams } from 'react-router-dom';

export default function LearningPlayer({ videoUrl, lectureId }) {
  const { courseId } = useParams();
  const { updateProgress } = useStore();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        updateProgress(courseId, lectureId);
      }
    }, 5000); // Mark complete after 5 seconds

    return () => clearTimeout(timer);
  }, [isPlaying, lectureId, courseId, updateProgress]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          title="Lecture Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={() => setIsPlaying(true)}
        ></iframe>
      </div>
      <div className="bg-blue-50 p-3 rounded text-blue-800 text-sm">
        ⏱️ Lecture will be marked as complete after watching for 5 seconds.
      </div>
    </div>
  );
}
