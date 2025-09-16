"use client";
import { useState } from "react";

export default function DogPage() {
  const [dogUrl, setDogUrl] = useState(null);

  async function fetchDog() {
    const res = await fetch("/api/dog");
    const data = await res.json();
    setDogUrl(data.message);
  }

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
      <h1 style={{ marginBottom: "20px", color: "#3c2a12" }}>🐾 犬画像ジェネレーター 🐾</h1>

      <button
        onClick={fetchDog}
        style={{
          padding: "12px 24px",
          borderRadius: "25px",
          border: "none",
          background: "#f5c63a",
          color: "#3c2a12",
          fontWeight: "bold",
          fontSize: "1rem",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,.15)",
          transition: "background .2s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#fbd859")}
        onMouseOut={(e) => (e.target.style.background = "#f5c63a")}
      >
        🐶 犬を呼ぶ！
      </button>

      {dogUrl && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "18px",
            background: "#fff",
            boxShadow: "0 8px 20px rgba(0,0,0,.1)",
          }}
        >
          <img
            src={dogUrl}
            alt="ランダムな犬"
            style={{ width: "300px", borderRadius: "12px" }}
          />
        </div>
      )}
    </div>
  );
}
