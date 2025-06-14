"use client"

import { Award, Plus, Trash2 } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CertificationEntry {
  id: string
  name: string
  organization: string
  issueDate: string
  expiryDate: string
  credentialId: string
  credentialUrl: string
}

export default function CertificationForm() {
  const [certifications, setCertifications] = useState<CertificationEntry[]>([
    {
      id: "1",
      name: "",
      organization: "",
      issueDate: "",
      expiryDate: "",
      credentialId: "",
      credentialUrl: "",
    },
  ])

  const addCertification = () => {
    const newCertification: CertificationEntry = {
      id: Date.now().toString(),
      name: "",
      organization: "",
      issueDate: "",
      expiryDate: "",
      credentialId: "",
      credentialUrl: "",
    }
    setCertifications([...certifications, newCertification])
  }

  const removeCertification = (id: string) => {
    setCertifications(certifications.filter((cert) => cert.id !== id))
  }

  const updateCertification = (id: string, field: keyof CertificationEntry, value: string) => {
    setCertifications(certifications.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert)))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-600" />
          <h2 className="text-lg font-semibold text-gray-900">Certifications</h2>
        </div>
        <Button
          onClick={addCertification}
          variant="outline"
          size="sm"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Certification
        </Button>
      </div>

      <p className="text-sm text-gray-600 mb-6">Add your professional certifications and credentials</p>

      {certifications.map((certification, index) => (
        <div key={certification.id} className="mb-6 p-4 border border-gray-200 rounded-lg relative">
          {certifications.length > 1 && (
            <Button
              onClick={() => removeCertification(certification.id)}
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Certification Name *</label>
              <input
                type="text"
                value={certification.name}
                onChange={(e) => updateCertification(certification.id, "name", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., AWS Certified Solutions Architect"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Issuing Organization *</label>
              <input
                type="text"
                value={certification.organization}
                onChange={(e) => updateCertification(certification.id, "organization", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Amazon Web Services"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Issue Date *</label>
              <input
                type="month"
                value={certification.issueDate}
                onChange={(e) => updateCertification(certification.id, "issueDate", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input
                type="month"
                value={certification.expiryDate}
                onChange={(e) => updateCertification(certification.id, "expiryDate", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Credential ID</label>
              <input
                type="text"
                value={certification.credentialId}
                onChange={(e) => updateCertification(certification.id, "credentialId", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Credential ID or License Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Credential URL</label>
              <input
                type="url"
                value={certification.credentialUrl}
                onChange={(e) => updateCertification(certification.id, "credentialUrl", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
