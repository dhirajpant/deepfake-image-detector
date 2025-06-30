import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How reliable is the Deepfake Detector?",
    answer:
      "Our custom-trained CNN model has been rigorously tested and achieves industry-leading accuracy on diverse datasets, ensuring trustworthy detection results.",
  },
  {
    question: "What happens to my uploaded images?",
    answer:
      "Your images are processed securely and temporarily on our server; we do NOT store or share your data to maintain your privacy.",
  },
  {
    question: "Can I use this tool on mobile or tablets?",
    answer:
      "Absolutely! The app is fully responsive and designed for smooth experience on all screen sizes and devices.",
  },
  {
    question: "Does it detect deepfakes in videos?",
    answer:
      "Currently, our focus is on still images. Video detection is on the roadmap and coming soon with even more powerful AI.",
  },
];

const features = [
  {
    icon: "🚀",
    title: "Blazing Fast Analysis",
    desc: "Get instant results with minimal wait, thanks to optimized AI inference and backend.",
  },
  {
    icon: "🎯",
    title: "Precision You Can Trust",
    desc: "State-of-the-art CNN model trained on millions of samples for ultra-accurate detection.",
  },
  {
    icon: "🛡️",
    title: "Your Privacy Matters",
    desc: "End-to-end secure processing ensures your data never leaves our encrypted servers.",
  },
  {
    icon: "🌍",
    title: "Anywhere, Anytime",
    desc: "Use Deepfake Detector from any device — desktop, tablet, or mobile — no hassle.",
  },
];

export default function Home() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-6 leading-snug">
          See the Truth Behind Every Image
        </h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-12">
          Protect yourself from digital deception with our cutting-edge AI-powered deepfake detection. Fast, accurate, and privacy-first.
        </p>
        <button
          onClick={() => navigate("/detector")}
          className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white px-10 py-3 rounded-lg font-semibold shadow-lg transition"
        >
          Try It Now
        </button>
      </div>

      {/* How It Works Section */}
      <div className="mb-24 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Upload any image you want to verify.",
            "Our AI quickly analyzes the image for signs of manipulation.",
            "Receive a clear result with confidence score instantly.",
          ].map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg transition cursor-default"
            >
              <div className="text-indigo-600 dark:text-indigo-400 text-4xl md:text-5xl font-extrabold mb-4">
                {idx + 1}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section (Why Choose Us) */}
      <div className="mb-24">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-12 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex space-x-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-default"
            >
              <div className="text-4xl md:text-5xl">{icon}</div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-1">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 max-w-md text-sm md:text-base leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 py-4 flex justify-between items-center text-indigo-700 dark:text-indigo-300 font-semibold text-left text-base focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span>{question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className="px-5 pb-5 pt-0 text-gray-700 dark:text-gray-300 leading-relaxed border-t border-indigo-200 dark:border-indigo-700 text-sm md:text-base"
                >
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
