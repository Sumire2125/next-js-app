"use client"; // ← これを最初に書く（クライアントコンポーネント）

import { useState } from "react";

export default function CounterPage() {
  // count という状態を管理（初期値 0）
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>カウンターサンプル</h1>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>＋1</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        −1
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        リセット
      </button>
    </div>
  );
}
