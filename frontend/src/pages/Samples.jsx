import { useNavigate } from "react-router-dom";

const sampleImages = [
  { id: 1, url: "/samples/real1.jpg", label: "Real Example 1" },
  { id: 2, url: "/samples/real2.jpg", label: "Real Example 2" },
  { id: 3, url: "/samples/real3.jpg", label: "Real Example 3" },
  { id: 4, url: "/samples/real4.jpg", label: "Real Example 4" },
  { id: 5, url: "/samples/deepfake1.jpg", label: "Deepfake Example 1" },
  { id: 6, url: "/samples/deepfake2.jpg", label: "Deepfake Example 2" },
  { id: 7, url: "/samples/deepfake3.jpg", label: "Deepfake Example 3" },
  { id: 8, url: "/samples/deepfake4.jpg", label: "Deepfake Example 4" },
];

export default function Samples() {
  const navigate = useNavigate();

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-indigo-700 dark:text-indigo-400 text-center">
        Sample Images
      </h2>

      <p className="mb-6 text-center text-gray-700 dark:text-gray-300">
        Click on an image to test it in the detector.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        {sampleImages.map(({ id, url, label }) => (
          <div
            key={id}
            onClick={() => navigate("/detector", { state: { imageUrl: url } })}
            className="relative cursor-pointer rounded-lg overflow-hidden border border-indigo-300 dark:border-indigo-600 hover:shadow-lg transition transform hover:scale-105"
          >
            <img
              src={url}
              alt={label}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center text-white font-semibold text-lg transition-opacity">
              Test Now →
            </div>
            <p className="text-center p-2 text-indigo-700 dark:text-indigo-300 font-semibold">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={() => {}}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white rounded-lg font-semibold transition"
        >
          Show More
        </button>
      </div>
    </section>
  );
}
