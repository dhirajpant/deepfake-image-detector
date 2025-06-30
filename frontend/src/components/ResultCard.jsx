import React from "react";

export default function ResultCard({ label, confidence }) {
  if (!label) return null;

  const isDeepfake = label.toLowerCase() === "deepfake";

  return (
    <div
      className={`max-w-md mx-auto mt-6 p-6 rounded-lg shadow-md text-center font-semibold text-lg
        ${
          isDeepfake
            ? "bg-red-100 text-red-700 border border-red-400"
            : "bg-green-100 text-green-700 border border-green-400"
        }`}
    >
      <p>
        Prediction:{" "}
        <span className="uppercase tracking-wide">{label}</span>
      </p>
      <p>Confidence: {(confidence * 100).toFixed(2)}%</p>
    </div>
  );
}
