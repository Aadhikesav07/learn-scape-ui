import { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';

export default function LearningPlayer({ videoUrl, lectureId, courseId }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { updateProgress } = useStore();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPlaying) {
        updateProgress(courseId, lectureId);
      }
    }, 5000); // Mark as complete after 5 seconds

    return () => clearTimeout(timer);
  }, [isPlaying, lectureId, courseId, updateProgress]);

  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="500"
        src={videoUrl}
        title="Lecture Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setIsPlaying(true)}
      ></iframe>
      <div className="p-4 bg-gray-800 text-white text-sm">
        Lecture will be marked complete after 5 seconds of playback.
      </div>
    </div>
  );
}
