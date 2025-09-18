"use client";
import Link from "next/link";
import "./todo.css";

export default function TodoPage() {
    return (
        <div className="todo-container">
            <h1>📝 Todoアプリ</h1>
            <p>Flutterで作った簡単なTodoアプリのデモです。</p>

            {/* カード部分 */}
            <div className="todo-card">
                <video src="/videos/todo.mp4" controls style={{ maxWidth: "350px", borderRadius: "12px" }} />
            </div>

            {/* GitHubリンク */}
            <a
                href="https://github.com/Sumire2125/flutter_sample_ios_app.git"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                📂 GitHubリポジトリを見る
            </a>

            <a
                href="/flutter-todo/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
            >
                🌐 Webで試す
            </a>

            {/* 戻るリンク */}
            <p style={{ marginTop: "2rem" }}>
                <Link href="/" className="github-link">
                    ← トップに戻る
                </Link>
            </p>
        </div>
    );
}
