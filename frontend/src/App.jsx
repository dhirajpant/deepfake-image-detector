import React, { useState, useEffect } from "react";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [result, setResult] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  // Cleanup old preview URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // Handle file & preview URL from UploadForm
  const handleFileChange = (file, url) => {
    setSelectedFile(file);
    setPreviewUrl(url);
    setResult(null); // reset previous result on new upload
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-indigo-100 flex flex-col">
      <header className="py-8 text-center text-3xl font-bold text-indigo-800">
        Deepfake Detector
      </header>

      <main className="flex-grow px-4 py-8 max-w-xl mx-auto">
        <UploadForm onResult={setResult} onFileChange={handleFileChange} />

        {previewUrl && (
          <div className="mt-6 text-center">
            <img
              src={previewUrl}
              alt="Uploaded preview"
              className="mx-auto max-h-64 rounded-lg shadow-md"
            />
          </div>
        )}

        {result && <ResultCard {...result} />}
      </main>

      <footer className="py-4 text-center text-gray-600 text-sm">
        Powered by your CNN model & FastAPI backend
      </footer>
    </div>
  );
}
