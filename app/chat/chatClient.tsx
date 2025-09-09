"use client";

import { useEffect, useState, useRef } from "react";
import styles from "../../styles/chat.module.css";

interface Message {
  sender: "user" | "bot";
  senderName: string;
  text: string;
  type: "text" | "image";
  time: string;
}

export default function ChatClient({ firstName }: { firstName: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // dummy backend
    setSocket(ws);

    ws.onmessage = (event) => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          senderName: "ArogyaBot",
          text: event.data,
          type: "text",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    };

    return () => ws.close();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage: Message = {
      sender: "user",
      senderName: firstName,
      text: input,
      type: "text",
      time: now,
    };
    setMessages((prev) => [...prev, userMessage]);

    socket?.send(input);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          senderName: "ArogyaBot",
          text: "This is a standard response 🤖",
          type: "text",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 800);

    setInput("");
  };

  const sendImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result as string;
      const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

      const userImage: Message = {
        sender: "user",
        senderName: firstName,
        text: imageData,
        type: "image",
        time: now,
      };
      setMessages((prev) => [...prev, userImage]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            senderName: "ArogyaBot",
            text: "✅ Image received",
            type: "text",
            time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          },
        ]);
      }, 800);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.chatWrapper}>
      <div className={styles.chatContainer}>
        {/* Messages */}
        <div className={styles.chatBox}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`${styles.messageWrapper} ${
                msg.sender === "user" ? styles.userWrapper : styles.botWrapper
              }`}
            >
              <span className={styles.senderName}>{msg.senderName}</span>
              <div
                className={`${styles.message} ${
                  msg.sender === "user" ? styles.user : styles.bot
                }`}
              >
                {msg.type === "text" ? (
                  <p>{msg.text}</p>
                ) : (
                  <img
                    src={msg.text}
                    alt="Uploaded"
                    className={styles.imageMessage}
                  />
                )}
              </div>
              <span className={styles.timestamp}>{msg.time}</span>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        {/* Input Area */}
        <div className={styles.inputArea}>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className={styles.textInput}
          />

          <label htmlFor="file-upload" className={styles.uploadLabel}>
            📷 Upload
          </label>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => e.target.files && sendImage(e.target.files[0])}
            className={styles.hiddenInput}
            id="file-upload"
          />

          <button onClick={sendMessage} className={styles.sendBtn}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
