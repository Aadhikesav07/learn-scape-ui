import { useParams } from "react-router-dom"
import { useStore } from "../store/useStore"
import CertificateComponent from "../components/user/CertificateComponent"

export default function CertificatePage() {
  const { id } = useParams()
  const { certificates } = useStore()
  const cert = certificates.find((c) => c.courseId === parseInt(id))

  if (!cert) return <p>No certificate found.</p>

  return (
    <div className="container mx-auto p-6">
      <CertificateComponent cert={cert} />
    </div>
  )
}
