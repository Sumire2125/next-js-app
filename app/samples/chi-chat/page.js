"use client";
import { useState } from "react";
import styles from "./ChiChatPage.module.css";
import Link from "next/link";

// メッセージの初期値
const INITIAL_MESSAGES = [
    { role: "assistant", text: "こんにちは！ちーちゃんです！チーズをくれると喜びます！" }
];

// メッセージバブルのコンポーネント
function MessageBubble({ msg }) {
    return (
        <div className={msg.role === "user" ? styles.user : styles.assistant}>
            {msg.role === "assistant" && (
                <img
                    src="/images/chi-icon.png"
                    alt="ちーちゃんアイコン"
                    className={styles.icon}
                />
            )}
            <div className={styles.bubble}>{msg.text}</div>
        </div>
    );
}

// チャット入力欄のコンポーネント
function ChatInput({ input, setInput, onSend }) {
    return (
        <div className={styles.inputArea}>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="ちーちゃんに話しかける..."
                className={styles.input}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        onSend();
                    }
                }}
            />
            <button onClick={onSend}>送信</button>
        </div>
    );
}

export default function ChiChatPage() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [input, setInput] = useState("");

    // メッセージ送信処理
    async function sendMessage() {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", text: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });
            const data = await res.json();
            setMessages([...newMessages, { role: "assistant", text: data.reply }]);
        } catch (e) {
            setMessages([
                ...newMessages,
                { role: "assistant", text: "エラーが発生しました(´；ω；`)" }
            ]);
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src="/images/chi-chan-header.png" alt="ちーちゃん" />
                <h1>ちーちゃんとおしゃべり</h1>
            </header>

            <div className={styles.chatBox}>
                {messages.map((msg, i) => (
                    <MessageBubble key={i} msg={msg} />
                ))}
            </div>

            <ChatInput input={input} setInput={setInput} onSend={sendMessage} />

            <footer className={styles.footer}>
                <Link href="/" className={styles.backLink}>
                    ← TOPへ戻る
                </Link>
            </footer>
        </div>
    );
}
