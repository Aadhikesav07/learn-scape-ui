import ReactPlayer from "react-player"

export default function LearningPlayer({ url }) {
  return (
    <div className="mb-4">
      <ReactPlayer url={url} controls width="100%" height="480px" />
    </div>
  )
}
