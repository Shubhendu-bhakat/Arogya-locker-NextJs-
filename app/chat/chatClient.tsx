"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import styles from "../../styles/chat.module.css";

interface Message {
  sender: "user" | "bot";
  senderName: string;
  text?: string;
  imageUrl?: string;
  type: "text" | "image";
  time: string;
}

export default function ChatClient({ firstName }: { firstName: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const formatTime = useCallback((value: string | number | Date) => {
    return new Date(value).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, []);

  const mapServerMessage = useCallback(
    (msg: {
      id: number;
      messageType: "TEXT" | "IMAGE";
      content: string | null;
      mediaUrl: string | null;
      createdAt: string;
      user?: { username: string | null };
    }): Message => {
      if (msg.messageType === "IMAGE") {
        return {
          sender: "user",
          senderName: msg.user?.username || firstName,
          type: "image",
          imageUrl: msg.mediaUrl ?? undefined,
          time: formatTime(msg.createdAt),
        };
      }

      return {
        sender: "user",
        senderName: msg.user?.username || firstName,
        type: "text",
        text: msg.content ?? "",
        time: formatTime(msg.createdAt),
      };
    },
    [firstName, formatTime]
  );

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

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/chat/messages", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to load chat history");
        }

        const data = await response.json();
        if (data?.data) {
          const hydratedMessages = data.data.map(mapServerMessage);
          setMessages(hydratedMessages);
        }
      } catch (error) {
        console.error("Failed to fetch chat history", error);
      }
    };

    fetchMessages();
  }, [mapServerMessage]);

  const sendMessage = async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    const now = formatTime(Date.now());
    const userMessage: Message = {
      sender: "user",
      senderName: firstName,
      text: trimmedInput,
      type: "text",
      time: now,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      await fetch("/api/chat/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: trimmedInput }),
      });
    } catch (error) {
      console.error("Failed to persist chat message", error);
    }

    socket?.send(trimmedInput);

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
  };

  const sendImage = async (file: File) => {
    if (!file) return;

    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/chat/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const { chatMessage, url } = await response.json();
      const userImage =
        chatMessage && chatMessage.messageType === "IMAGE"
          ? mapServerMessage({
              id: chatMessage.id,
              messageType: chatMessage.messageType,
              content: chatMessage.content,
              mediaUrl: chatMessage.mediaUrl ?? url,
              createdAt: chatMessage.createdAt,
              user: chatMessage.user,
            })
          : {
              sender: "user" as const,
              senderName: firstName,
              imageUrl: url,
              type: "image" as const,
              time: now,
            };

      setMessages((prev) => [...prev, userImage]);
      socket?.send(url);

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
    } catch (error) {
      console.error("Image upload failed", error);
    } finally {
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
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
                ) : msg.imageUrl ? (
                  <Image
                    src={msg.imageUrl}
                    alt="Uploaded"
                    className={styles.imageMessage}
                    width={200}
                    height={200}
                    unoptimized
                  />
                ) : null}
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
