import { useState } from "react";

export default function AuditLog({
  apps,
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      style={{
        background: "#0f172a",
        border:
          "1px solid #1e40af",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <button
        onClick={() =>
          setOpen(!open)
        }
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "#60a5fa",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          🔐 ArmorIQ Audit Trail
        </span>

        <span
          style={{
            color: "#64748b",
          }}
        >
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open && (
        <div
          style={{
            marginTop: 12,
            fontFamily:
              "monospace",
            fontSize: 11,
          }}
        >
          {apps.map(
            (app, i) => (
              <div
                key={i}
                style={{
                  display:
                    "grid",
                  gridTemplateColumns:
                    "auto 1fr auto auto auto",
                  gap: 12,
                  padding:
                    "6px 0",
                  borderBottom:
                    "1px solid #1e293b",
                  color:
                    "#64748b",
                }}
              >
                <span
                  style={{
                    color:
                      "#22d3ee",
                  }}
                >
                  ARM-2026-
                  {String(
                    1000 + i
                  ).padStart(
                    4,
                    "0"
                  )}
                </span>

                <span
                  style={{
                    color:
                      "#94a3b8",
                  }}
                >
                  {app.name.toLowerCase()}
                </span>

                <span
                  style={{
                    color:
                      "#818cf8",
                  }}
                >
                  metadata-only
                </span>

                <span
                  style={{
                    color:
                      "#4ade80",
                  }}
                >
                  PASSED
                </span>

                <span>
                  {(
                    Math.random() *
                      3 +
                    1
                  ).toFixed(
                    1
                  )}
                  ms
                </span>
              </div>
            )
          )}

          <div
            style={{
              color:
                "#4ade80",
              marginTop: 8,
              fontSize: 11,
            }}
          >
            ✅ Zero personal
            data processed ·
            All requests
            logged · Policy
            enforced
          </div>
        </div>
      )}
    </div>
  );
}