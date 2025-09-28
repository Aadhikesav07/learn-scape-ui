import { QRCodeSVG } from "qrcode.react"

export default function CertificateComponent({ cert }) {
  return (
    <div className="bg-white p-6 rounded shadow text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-2">Certificate of Completion</h2>
      <p className="mb-2">{cert.studentName}</p>
      <p className="mb-2">Course: {cert.courseName}</p>
      <p className="mb-4">Score: {cert.score}%</p>
      <QRCodeSVG value={cert.link} size={128} />
    </div>
  )
}
