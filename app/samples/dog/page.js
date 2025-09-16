"use client";
import Link from "next/link";
import { useDog } from "./useDog";



export default function DogPage() {
  const { dogUrl, message, fetchDog } = useDog();

  return (
    <div className="dog-page">
      <h1 className="dog-title">🐾 わんこヒーリングルーム 🐾</h1>

      <button className="dog-button" onClick={fetchDog}>
        🐶 犬を呼ぶ！
      </button>

      {message && (
        <div className="message-bubble">{message}</div>
      )}
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
