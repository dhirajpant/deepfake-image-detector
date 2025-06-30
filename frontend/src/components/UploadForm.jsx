import { useState } from "react";

export default function UploadForm({ onPredict, loading }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onPredict(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 max-w-lg mx-auto"
    >
      <label
        htmlFor="fileInput"
        className="block mb-4 cursor-pointer border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center hover:border-indigo-500 transition"
      >
        {previewUrl ? (
          <img
            src={previewUrl}
            alt="Preview"
            className="max-h-64 mx-auto rounded"
          />
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Click or drag an image here to upload</p>
        )}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <button
        type="submit"
        disabled={!file || loading}
        className="w-full py-3 mt-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 transition"
      >
        {loading ? "Predicting..." : "Predict"}
      </button>
    </form>
  );
}
