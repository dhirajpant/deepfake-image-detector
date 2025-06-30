import React, { useState, useEffect } from "react";

export default function UploadForm({ onResult, onFileChange }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setError("");
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);

      // Create preview URL
      const previewUrl = URL.createObjectURL(selectedFile);

      // Pass file and previewUrl to parent
      onFileChange(selectedFile, previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please select an image file");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        onResult(data);
      } else {
        setError(data.error || "Prediction failed");
      }
    } catch (err) {
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  // Cleanup preview URL when component unmounts or file changes
  useEffect(() => {
    return () => {
      if (file) URL.revokeObjectURL(file);
    };
  }, [file]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <label
        htmlFor="fileInput"
        className="block mb-4 cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-10 text-center hover:border-blue-500 transition"
      >
        {file ? (
          <p className="text-gray-700">{file.name}</p>
        ) : (
          <p className="text-gray-400">Click or drag image here to upload</p>
        )}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {error && (
        <p className="mb-4 text-red-600 font-semibold text-center">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {loading ? "Predicting..." : "Predict"}
      </button>
    </form>
  );
}
