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
    <div className="dog-page">
      <h1 className="dog-title">🐾 犬画像ジェネレーター 🐾</h1>

      <button className="dog-button" onClick={fetchDog}>
        🐶 犬を呼ぶ！
      </button>

      {dogUrl && (
        <>
          <div className="dog-card">
            <img src={dogUrl} alt="ランダムな犬" className="dog-img" />
          </div>

        </>
      )}
      <p>
        <Link href="/" className="dog-link">← トップに戻る</Link>
      </p>
    </div>



  );
}
