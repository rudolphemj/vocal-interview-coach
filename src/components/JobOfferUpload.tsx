import React, { useState } from "react";
import pdfService from "@/services/pdfService";

interface JobOfferUploadProps {
  onSubmit: (jobOffer: string) => void;
}

export default function JobOfferUpload({ onSubmit }: JobOfferUploadProps) {
  const [jobOfferText, setJobOfferText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"text" | "pdf">("text");

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobOfferText.trim()) {
      setError("Veuillez entrer le texte de l'offre d'emploi");
      return;
    }
    onSubmit(jobOfferText);
  };

  const handlePDFUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError("");

    try {
      if (!pdfService.isValidPDF(file)) {
        throw new Error("Veuillez sélectionner un fichier PDF valide");
      }

      const result = await pdfService.extractTextFromPDF(file);
      setJobOfferText(result.text);
      setActiveTab("text");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erreur lors de la lecture du PDF"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        📄 Importez votre offre d'emploi
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        <button
          onClick={() => setActiveTab("text")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "text"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          📝 Texte
        </button>
        <button
          onClick={() => setActiveTab("pdf")}
          className={`px-4 py-2 font-semibold ${
            activeTab === "pdf"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          📑 PDF
        </button>
      </div>

      {/* Error message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          ❌ {error}
        </div>
      )}

      {/* Text input tab */}
      {activeTab === "text" && (
        <form onSubmit={handleTextSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Collez le texte de l'offre d'emploi
            </label>
            <textarea
              value={jobOfferText}
              onChange={(e) => setJobOfferText(e.target.value)}
              placeholder="Collez ici le contenu complet de l'offre d'emploi..."
              className="w-full h-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            Continuer avec cet offre ✓
          </button>
        </form>
      )}

      {/* PDF upload tab */}
      {activeTab === "pdf" && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Sélectionnez un fichier PDF
          </label>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              accept=".pdf"
              onChange={handlePDFUpload}
              disabled={loading}
              className="hidden"
              id="pdf-upload"
            />
            <label htmlFor="pdf-upload" className="cursor-pointer">
              <div className="text-4xl mb-2">📂</div>
              <p className="text-gray-600 mb-2">
                Glissez-déposez votre PDF ici ou cliquez pour sélectionner
              </p>
              <p className="text-sm text-gray-400">Fichiers PDF uniquement</p>
            </label>
          </div>

          {loading && (
            <div className="mt-4 text-center">
              <div className="inline-block">
                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-600 mt-2">Lecture du PDF...</p>
            </div>
          )}

          {jobOfferText && !loading && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-semibold">
                ✓ PDF importé avec succès
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Vous pouvez maintenant cliquer sur "Continuer avec cet offre"
              </p>
            </div>
          )}
        </div>
      )}

      {/* Info box */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-900">
          <span className="font-semibold">💡 Conseil:</span> Plus l'offre
          d'emploi est détaillée, meilleures seront les questions générées par
          l'IA.
        </p>
      </div>
    </div>
  );
}
