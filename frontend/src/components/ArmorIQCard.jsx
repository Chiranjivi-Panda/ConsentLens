<h1 style={{color:"red"}}>
ARMOR IQ TEST
</h1>
export default function ArmorIQCard() {

  const topApps = [
    {
      name: "TikTok",
      score: 89,
      level: "CRITICAL",
    },
    {
      name: "Facebook",
      score: 87,
      level: "CRITICAL",
    },
    {
      name: "Truecaller",
      score: 82,
      level: "CRITICAL",
    },
    {
      name: "Instagram",
      score: 74,
      level: "HIGH",
    },
    {
      name: "Snapchat",
      score: 68,
      level: "HIGH",
    },
    {
      name: "Uber",
      score: 52,
      level: "MEDIUM",
    },
    {
      name: "WhatsApp",
      score: 48,
      level: "MEDIUM",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">

      <div className="glass rounded-3xl p-8">

        <h2 className="text-xl font-bold mb-8">
          📊 India's Top Apps — Pre-Analyzed
        </h2>

        {topApps.map(
          (app, index) => (
            <div
              key={app.name}
              className="flex items-center gap-4 py-4 border-b border-slate-800"
            >
              <span className="w-5 text-gray-500">
                {index + 1}
              </span>

              <span className="flex-1 font-medium">
                {app.name}
              </span>

              <div className="w-24 bg-slate-800 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{
                    width:
                      `${app.score}%`,
                  }}
                />
              </div>

              <span className="w-10 text-right font-bold">
                {app.score}
              </span>

              <span className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-400">
                {app.level}
              </span>

              <button className="text-xs px-3 py-1 rounded-lg border border-slate-700 text-gray-400">
                Analyze
              </button>
            </div>
          )
        )}

      </div>

    </section>
  );
}