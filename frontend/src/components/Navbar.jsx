import { FaShieldAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-slate-950/70">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <FaShieldAlt className="text-yellow-400 text-xl" />

          <h1 className="font-bold text-xl text-indigo-400">
            ConsentLens
          </h1>
        </div>

        <div className="flex items-center gap-2">

          <div className="px-4 py-2 rounded-full border border-blue-500 text-xs bg-blue-500/10 text-blue-300">
            🛡 ArmorIQ Protected
          </div>

          <div className="px-4 py-2 rounded-full border border-gray-700 text-xs text-gray-400">
            NeuroX Hackathon 2026
          </div>

        </div>

      </div>
    </nav>
  );
}