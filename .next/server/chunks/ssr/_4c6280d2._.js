module.exports = [
"[project]/styles/chat.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bot": "chat-module__uNFIjq__bot",
  "chatBox": "chat-module__uNFIjq__chatBox",
  "chatContainer": "chat-module__uNFIjq__chatContainer",
  "chatWrapper": "chat-module__uNFIjq__chatWrapper",
  "fadeIn": "chat-module__uNFIjq__fadeIn",
  "hiddenInput": "chat-module__uNFIjq__hiddenInput",
  "imageMessage": "chat-module__uNFIjq__imageMessage",
  "inputArea": "chat-module__uNFIjq__inputArea",
  "message": "chat-module__uNFIjq__message",
  "sendBtn": "chat-module__uNFIjq__sendBtn",
  "textInput": "chat-module__uNFIjq__textInput",
  "uploadLabel": "chat-module__uNFIjq__uploadLabel",
  "user": "chat-module__uNFIjq__user",
});
}),
"[project]/app/chat/chatClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/chat.module.css [app-ssr] (css module)");
"use client";
;
;
;
;
function ChatClient({ firstName }) {
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formatTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        return new Date(value).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    }, []);
    const mapServerMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((msg)=>{
        if (msg.messageType === "IMAGE") {
            return {
                sender: "user",
                senderName: msg.user?.username || firstName,
                type: "image",
                imageUrl: msg.mediaUrl ?? undefined,
                time: formatTime(msg.createdAt)
            };
        }
        return {
            sender: "user",
            senderName: msg.user?.username || firstName,
            type: "text",
            text: msg.content ?? "",
            time: formatTime(msg.createdAt)
        };
    }, [
        firstName,
        formatTime
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const ws = new WebSocket("ws://localhost:8080"); // dummy backend
        setSocket(ws);
        ws.onmessage = (event)=>{
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "bot",
                        senderName: "ArogyaBot",
                        text: event.data,
                        type: "text",
                        time: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }
                ]);
        };
        return ()=>ws.close();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        chatEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    }, [
        messages
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchMessages = async ()=>{
            try {
                const response = await fetch("/api/chat/messages", {
                    method: "GET",
                    credentials: "include"
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
    }, [
        mapServerMessage
    ]);
    const sendMessage = async ()=>{
        const trimmedInput = input.trim();
        if (!trimmedInput) return;
        const now = formatTime(Date.now());
        const userMessage = {
            sender: "user",
            senderName: firstName,
            text: trimmedInput,
            type: "text",
            time: now
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInput("");
        try {
            await fetch("/api/chat/messages", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: trimmedInput
                })
            });
        } catch (error) {
            console.error("Failed to persist chat message", error);
        }
        socket?.send(trimmedInput);
        setTimeout(()=>{
            setMessages((prev)=>[
                    ...prev,
                    {
                        sender: "bot",
                        senderName: "ArogyaBot",
                        text: "This is a standard response 🤖",
                        type: "text",
                        time: new Date().toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                        })
                    }
                ]);
        }, 800);
    };
    const sendImage = async (file)=>{
        if (!file) return;
        const now = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
        const formData = new FormData();
        formData.append("file", file);
        try {
            const response = await fetch("/api/chat/upload", {
                method: "POST",
                body: formData
            });
            if (!response.ok) {
                throw new Error("Image upload failed");
            }
            const { chatMessage, url } = await response.json();
            const userImage = chatMessage && chatMessage.messageType === "IMAGE" ? mapServerMessage({
                id: chatMessage.id,
                messageType: chatMessage.messageType,
                content: chatMessage.content,
                mediaUrl: chatMessage.mediaUrl ?? url,
                createdAt: chatMessage.createdAt,
                user: chatMessage.user
            }) : {
                sender: "user",
                senderName: firstName,
                imageUrl: url,
                type: "image",
                time: now
            };
            setMessages((prev)=>[
                    ...prev,
                    userImage
                ]);
            socket?.send(url);
            setTimeout(()=>{
                setMessages((prev)=>[
                        ...prev,
                        {
                            sender: "bot",
                            senderName: "ArogyaBot",
                            text: "✅ Image received",
                            type: "text",
                            time: new Date().toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit"
                            })
                        }
                    ]);
            }, 800);
        } catch (error) {
            console.error("Image upload failed", error);
        } finally{
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatWrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatContainer,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].chatBox,
                    children: [
                        messages.map((msg, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].messageWrapper} ${msg.sender === "user" ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].userWrapper : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].botWrapper}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].senderName,
                                        children: msg.senderName
                                    }, void 0, false, {
                                        fileName: "[project]/app/chat/chatClient.tsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].message} ${msg.sender === "user" ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].user : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bot}`,
                                        children: msg.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: msg.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/chat/chatClient.tsx",
                                            lineNumber: 229,
                                            columnNumber: 19
                                        }, this) : msg.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: msg.imageUrl,
                                            alt: "Uploaded",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageMessage,
                                            width: 200,
                                            height: 200,
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/app/chat/chatClient.tsx",
                                            lineNumber: 231,
                                            columnNumber: 19
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/app/chat/chatClient.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timestamp,
                                        children: msg.time
                                    }, void 0, false, {
                                        fileName: "[project]/app/chat/chatClient.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/chat/chatClient.tsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: chatEndRef
                        }, void 0, false, {
                            fileName: "[project]/app/chat/chatClient.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/chat/chatClient.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].inputArea,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Type your message...",
                            value: input,
                            onChange: (e)=>setInput(e.target.value),
                            onKeyDown: (e)=>e.key === "Enter" && sendMessage(),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textInput
                        }, void 0, false, {
                            fileName: "[project]/app/chat/chatClient.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "file-upload",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].uploadLabel,
                            children: "📷 Upload"
                        }, void 0, false, {
                            fileName: "[project]/app/chat/chatClient.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            accept: "image/*",
                            ref: fileInputRef,
                            onChange: (e)=>e.target.files && sendImage(e.target.files[0]),
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hiddenInput,
                            id: "file-upload"
                        }, void 0, false, {
                            fileName: "[project]/app/chat/chatClient.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: sendMessage,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$chat$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sendBtn,
                            children: "Send"
                        }, void 0, false, {
                            fileName: "[project]/app/chat/chatClient.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/chat/chatClient.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/chat/chatClient.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/chat/chatClient.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_4c6280d2._.js.map