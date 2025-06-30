import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
      <h1 className="text-5xl font-extrabold mb-6 text-indigo-700 dark:text-indigo-400">
        Welcome to Deepfake Detector
      </h1>
      <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300 mb-10">
        Detect manipulated or fake images with our state-of-the-art CNN model. 
        Protect yourself from misinformation by verifying image authenticity quickly and easily.
      </p>
      <button
        onClick={() => navigate("/detector")}
        className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold transition"
      >
        Get Started
      </button>
    </section>
  );
}
