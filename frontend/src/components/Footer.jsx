export default function Footer() {
    return (
      <footer className="bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-center py-4 mt-8 border-t border-slate-200 dark:border-slate-700">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-medium">Deepfake Detector</span> — Powered by your CNN model & FastAPI backend
        </p>
      </footer>
    );
  }
  