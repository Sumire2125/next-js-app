"use client";
import { useState } from "react";
import Link from "next/link"; 

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
        <>
          {/* 犬画像カード */}
          <div
            style={{
              marginTop: "20px",
              padding: "20px",
              borderRadius: "16px",
              background: "white",
              display: "inline-block",
              boxShadow: "0 4px 12px rgba(0,0,0,.15)",
            }}
          >
            <img
              src={dogUrl}
              alt="ランダムな犬"
              style={{ maxWidth: "100%", borderRadius: "12px" }}
            />
          </div>

          {/* カードの下にリンク */}
          <p style={{ marginTop: "20px" }}>
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
        </>
      )}
      
    </div>
    
  );
}
