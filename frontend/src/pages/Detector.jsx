import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Detector() {
  const location = useLocation();
  const sampleImageUrl = location.state?.imageUrl || null;

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(sampleImageUrl);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Rating state
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState(null);

  useEffect(() => {
    const loadSampleFile = async () => {
      try {
        const res = await fetch(sampleImageUrl);
        const blob = await res.blob();
        const imageFile = new File([blob], "sample.jpg", { type: blob.type });
        setFile(imageFile);
        setPreviewUrl(URL.createObjectURL(blob));
      } catch (err) {
        console.error("Failed to preload image:", err);
      }
    };

    if (sampleImageUrl) {
      loadSampleFile();
    }
  }, [sampleImageUrl]);

  const handleFileChange = (e) => {
    setError("");
    setResult(null);
    setRating(0);
    setSubmittedFeedback(null);
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image first.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setSubmittedFeedback(null);
    setRating(0);
    setFeedback("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "Prediction failed.");
      }
    } catch (err) {
      setError("Server error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const submitFeedback = () => {
    if (rating === 0) {
      alert("Please give a rating before submitting.");
      return;
    }
    setSubmittedFeedback({ rating, feedback });
    // Future: send this feedback to backend
  };

  const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
    <svg
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-8 cursor-pointer transition-colors ${
        filled ? "text-yellow-400" : "text-gray-400 dark:text-gray-600"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      stroke="none"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.463c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L3.602 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
    </svg>
  );

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6 text-indigo-700 dark:text-indigo-400 text-center">
        Deepfake Detector
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center"
      >
        <label
          htmlFor="fileInput"
          className="w-full border-2 border-dashed border-indigo-400 dark:border-indigo-600 rounded-lg py-16 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-600 dark:hover:border-indigo-400 transition"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-64 object-contain rounded-md"
            />
          ) : (
            <p className="text-indigo-500 dark:text-indigo-300">
              Click or drag image here to upload
            </p>
          )}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {error && (
          <p className="text-red-600 dark:text-red-400 mt-4 font-semibold">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Detecting..." : "Detect"}
        </button>
      </form>

      {result && (
        <div
          className={`mt-8 p-6 rounded-lg shadow text-center
            bg-white dark:bg-gray-800
            ${
              result.label.toLowerCase().includes("deepfake")
                ? "text-red-700 dark:text-red-400"
                : "text-green-700 dark:text-green-400"
            }
          `}
        >
          <h3 className="text-2xl font-bold mb-2">Result: {result.label}</h3>
          <p className="text-lg">
            Confidence: {(result.confidence * 100).toFixed(2)}%
          </p>

          {/* Rating Section */}
          {!submittedFeedback ? (
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-400">
                Rate your experience:
              </h4>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    filled={star <= (hoverRating || rating)}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                  />
                ))}
              </div>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us about your experience..."
                className="mt-4 w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white dark:border-gray-600"
                rows={4}
              />
              <button
                onClick={submitFeedback}
                className="mt-3 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-md font-semibold transition"
              >
                Submit Feedback
              </button>
            </div>
          ) : (
            <div className="mt-6 text-green-600 dark:text-green-400 font-semibold text-lg">
              Thanks for your feedback! You rated {submittedFeedback.rating}{" "}
              star{submittedFeedback.rating > 1 ? "s" : ""}.
            </div>
          )}
        </div>
      )}
    </section>
  );
}
