"use client";
import { useState } from "react";
import Link from "next/link";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #fff6c9, #ffe6d9)",
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "20px", color: "#3c2a12" }}>🔢 カウンターサンプル</h1>
      <p style={{ marginBottom: "20px" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "8px 16px",
            borderRadius: "12px",
            background: "#f5c63a",
            color: "#3c2a12",
            fontWeight: "bold",
            textDecoration: "none",
            boxShadow: "0 4px 8px rgba(0,0,0,.1)",
          }}
        >
          ← トップに戻る
        </Link>
      </p>
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "18px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", color: "#f5c63a" }}>
          {count}
        </p>

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: "none",
              background: "#4caf50",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ＋1
          </button>
          <button
            onClick={() => setCount(count - 1)}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: "none",
              background: "#f44336",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            −1
          </button>
          <button
            onClick={() => setCount(0)}
            style={{
              padding: "10px 20px",
              borderRadius: "12px",
              border: "none",
              background: "#9e9e9e",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            リセット
          </button>
        </div>
      </div>
    </div>
  );
}
