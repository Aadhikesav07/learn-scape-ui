import React from "react";
const CertificateComponent = ({ cert }) => (
  <div className="bg-white shadow p-6 rounded max-w-xl mx-auto mt-8 text-center">
    <h2 className="text-2xl font-bold">Digital Certificate</h2>
    <div className="mt-4 font-semibold text-lg">{cert.courseName}</div>
    <div className="mt-2">Awarded to <span className="font-bold">{cert.userName}</span></div>
    <div className="mt-2">Date: {cert.date}</div>
    <div className="mt-2">Score: {cert.score}</div>
    <img src={cert.qrCode} alt="QR" className="mx-auto mt-3 h-16"/>
    <div className="mt-2 text-blue-600">Verify: <a href={cert.verifyUrl}>{cert.verifyUrl}</a></div>
  </div>
);

export default CertificateComponent;
