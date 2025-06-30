export default function About() {
    return (
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold mb-6 text-indigo-700 dark:text-indigo-400 text-center">
          About Deepfake Detector
        </h2>
  
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          This project uses a Convolutional Neural Network (CNN) model trained to detect deepfake images with high accuracy.
        </p>
  
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          The backend is built with FastAPI, serving the model and prediction API, while the frontend is built in React with Tailwind CSS for a modern, responsive UI including dark mode support.
        </p>
  
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Deepfake detection is important for digital media verification and helps combat misinformation by automatically identifying manipulated images.
        </p>
      </section>
    );
  }
  