export default function ResultCard({ result, className = "" }) {
  if (!result) return null;

  const { label, confidence } = result;
  const isDeepfake = label.toLowerCase() === "deepfake";

  return (
    <div
      className={`p-6 rounded-xl shadow-md w-full bg-white max-w-md mx-auto ${className}`}
      role="region"
      aria-live="polite"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Prediction Result
      </h2>

      <p
        className={`text-center text-xl font-semibold mb-6 ${
          isDeepfake ? "text-red-600" : "text-green-600"
        }`}
      >
        {label}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
        <div
          className={`h-6 rounded-full transition-all duration-500 ease-in-out ${
            isDeepfake ? "bg-red-600" : "bg-green-600"
          }`}
          style={{ width: `${(confidence * 100).toFixed(2)}%` }}
          aria-valuenow={confidence}
          aria-valuemin="0"
          aria-valuemax="1"
          role="progressbar"
        />
      </div>

      <p className="mt-4 text-center text-gray-700 font-medium">
        Confidence: {(confidence * 100).toFixed(2)}%
      </p>
    </div>
  );
}
