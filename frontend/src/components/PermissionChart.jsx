import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import {
  CATEGORY_COLORS,
} from "../data/appDatabase";

export default function PermissionChart({
  permissions,
}) {
  const catMap = {};

  Object.entries(
    permissions
  ).forEach(
    ([name, { pts, category }]) => {
      catMap[category] =
        (catMap[category] || 0) + pts;
    }
  );

  const data = Object.entries(
    catMap
  ).map(([cat, pts]) => ({
    name:
      cat.charAt(0).toUpperCase() +
      cat.slice(1),
    value: pts,
    color:
      CATEGORY_COLORS[cat] ||
      "#94a3b8",
  }));

  return (
    <div>
      <p
        style={{
          color: "#94a3b8",
          fontSize: 12,
          marginBottom: 8,
        }}
      >
        Risk points by category
      </p>

      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <ResponsiveContainer
          width={160}
          height={160}
        >
          <PieChart>
            <Pie
              data={data}
              cx={75}
              cy={75}
              innerRadius={42}
              outerRadius={72}
              dataKey="value"
              paddingAngle={3}
            >
              {data.map((d, i) => (
                <Cell
                  key={i}
                  fill={d.color}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          {data.map((d, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 2,
                  background: d.color,
                }}
              />

              <span
                style={{
                  color: "#cbd5e1",
                  fontSize: 12,
                }}
              >
                {d.name}
              </span>

              <span
                style={{
                  color: "#64748b",
                  fontSize: 11,
                }}
              >
                {d.value} pts
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}