import React from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../store/useStore";
import CertificateComponent from "../components/user/CertificateComponent";

const CertificatePage = () => {
  const { certificateId } = useParams();
  const { certificates } = useStore();
  const cert = certificates.find(c => c.id === Number(certificateId));
  if (!cert) return <div className="mt-8 text-center">Certificate not found.</div>;
  return <CertificateComponent cert={cert} />;
};

export default CertificatePage;
