(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/styles/document.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "browseButton": "document-module__K5D1na__browseButton",
  "cardHeader": "document-module__K5D1na__cardHeader",
  "categoryCard": "document-module__K5D1na__categoryCard",
  "categoryCount": "document-module__K5D1na__categoryCount",
  "categoryDescription": "document-module__K5D1na__categoryDescription",
  "categoryGrid": "document-module__K5D1na__categoryGrid",
  "categoryIcon": "document-module__K5D1na__categoryIcon",
  "categoryName": "document-module__K5D1na__categoryName",
  "categoryOverviewCard": "document-module__K5D1na__categoryOverviewCard",
  "categorySelect": "document-module__K5D1na__categorySelect",
  "deleteButton": "document-module__K5D1na__deleteButton",
  "document": "document-module__K5D1na__document",
  "documentActions": "document-module__K5D1na__documentActions",
  "documentCard": "document-module__K5D1na__documentCard",
  "documentsList": "document-module__K5D1na__documentsList",
  "dragActive": "document-module__K5D1na__dragActive",
  "emptyState": "document-module__K5D1na__emptyState",
  "emptyStateText": "document-module__K5D1na__emptyStateText",
  "emptyStateTitle": "document-module__K5D1na__emptyStateTitle",
  "errorMessage": "document-module__K5D1na__errorMessage",
  "failed": "document-module__K5D1na__failed",
  "fileCategory": "document-module__K5D1na__fileCategory",
  "fileDetails": "document-module__K5D1na__fileDetails",
  "fileDropZone": "document-module__K5D1na__fileDropZone",
  "fileIcon": "document-module__K5D1na__fileIcon",
  "fileInfo": "document-module__K5D1na__fileInfo",
  "fileInput": "document-module__K5D1na__fileInput",
  "fileInputWrapper": "document-module__K5D1na__fileInputWrapper",
  "fileMetadata": "document-module__K5D1na__fileMetadata",
  "fileName": "document-module__K5D1na__fileName",
  "fileSeparator": "document-module__K5D1na__fileSeparator",
  "fileSize": "document-module__K5D1na__fileSize",
  "fileStatus": "document-module__K5D1na__fileStatus",
  "formGroup": "document-module__K5D1na__formGroup",
  "formLabel": "document-module__K5D1na__formLabel",
  "hasFile": "document-module__K5D1na__hasFile",
  "helpText": "document-module__K5D1na__helpText",
  "hiddenFileInput": "document-module__K5D1na__hiddenFileInput",
  "image": "document-module__K5D1na__image",
  "loadingSpinner": "document-module__K5D1na__loadingSpinner",
  "orDivider": "document-module__K5D1na__orDivider",
  "other": "document-module__K5D1na__other",
  "pageHeader": "document-module__K5D1na__pageHeader",
  "pageSubtitle": "document-module__K5D1na__pageSubtitle",
  "pageTitle": "document-module__K5D1na__pageTitle",
  "pdf": "document-module__K5D1na__pdf",
  "processing": "document-module__K5D1na__processing",
  "progressBar": "document-module__K5D1na__progressBar",
  "progressFill": "document-module__K5D1na__progressFill",
  "progressText": "document-module__K5D1na__progressText",
  "removeFileButton": "document-module__K5D1na__removeFileButton",
  "required": "document-module__K5D1na__required",
  "sectionTitle": "document-module__K5D1na__sectionTitle",
  "selected": "document-module__K5D1na__selected",
  "spin": "document-module__K5D1na__spin",
  "submitButton": "document-module__K5D1na__submitButton",
  "successMessage": "document-module__K5D1na__successMessage",
  "uploadCard": "document-module__K5D1na__uploadCard",
  "uploadContainer": "document-module__K5D1na__uploadContainer",
  "uploadForm": "document-module__K5D1na__uploadForm",
  "uploadIcon": "document-module__K5D1na__uploadIcon",
  "uploadProgress": "document-module__K5D1na__uploadProgress",
  "uploadSubtext": "document-module__K5D1na__uploadSubtext",
  "uploadText": "document-module__K5D1na__uploadText",
  "uploadWrapper": "document-module__K5D1na__uploadWrapper",
  "uploaded": "document-module__K5D1na__uploaded",
  "uploading": "document-module__K5D1na__uploading",
  "viewButton": "document-module__K5D1na__viewButton",
});
}),
"[project]/app/documents/uploads/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UploadDocumentPage",
    ()=>UploadDocumentPage,
    "default",
    ()=>UploadDocumentPage2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/document.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const DOCUMENT_CATEGORIES = [
    {
        value: "PRESCRIPTION",
        label: "Prescription",
        icon: "💊",
        description: "Medical prescriptions and medication"
    },
    {
        value: "XRAY",
        label: "X-Ray",
        icon: "🩻",
        description: "X-ray images and radiological reports"
    },
    {
        value: "LAB_TESTS",
        label: "Lab Tests",
        icon: "🧪",
        description: "Laboratory test results and reports"
    },
    {
        value: "GENERAL_DOCUMENTS",
        label: "General Documents",
        icon: "📄",
        description: "General medical documents"
    },
    {
        value: "OTHERS",
        label: "Others",
        icon: "📋",
        description: "Other medical related documents"
    }
];
function UploadDocumentPage() {
    _s();
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragActive, setIsDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadResult, setUploadResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingUserId, setIsLoadingUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch userId when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UploadDocumentPage.useEffect": ()=>{
            const fetchUserId = {
                "UploadDocumentPage.useEffect.fetchUserId": async ()=>{
                    try {
                        setIsLoadingUserId(true);
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/auth/documents/uploades");
                        setUserId(res.data.userId);
                    } catch (error) {
                        console.error("Error fetching userId:", error);
                        setError("Failed to load user information. Please refresh the page.");
                    } finally{
                        setIsLoadingUserId(false);
                    }
                }
            }["UploadDocumentPage.useEffect.fetchUserId"];
            fetchUserId();
        }
    }["UploadDocumentPage.useEffect"], []);
    const handleFileSelection = (file)=>{
        const maxSize = 10 * 1024 * 1024;
        if (file.size > maxSize) {
            setError("File size should not exceed 10MB. Current size: ".concat((file.size / (1024 * 1024)).toFixed(2), "MB"));
            return;
        }
        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/gif",
            "image/webp",
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ];
        if (!allowedTypes.includes(file.type)) {
            setError("File type not allowed. Please upload PDF, images, or Word documents.");
            return;
        }
        setSelectedFile(file);
        setError("");
        setUploadResult(null);
    };
    const handleFileInputChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            handleFileSelection(e.target.files[0]);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileSelection(e.dataTransfer.files[0]);
        }
    };
    const removeSelectedFile = ()=>{
        setSelectedFile(null);
        setError("");
        setUploadResult(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };
    const getFileIcon = (fileType)=>{
        if (fileType.includes("pdf")) return "pdf";
        if (fileType.includes("image")) return "image";
        if (fileType.includes("document") || fileType.includes("word")) return "document";
        return "other";
    };
    const formatFileSize = (bytes)=>{
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const sizes = [
            "Bytes",
            "KB",
            "MB",
            "GB"
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!selectedFile) {
            setError("Please select a file to upload");
            return;
        }
        if (!selectedCategory) {
            setError("Please select a document category");
            return;
        }
        if (!userId) {
            setError("User information not available. Please refresh the page.");
            return;
        }
        setIsUploading(true);
        setUploadProgress(0);
        setError("");
        setUploadResult(null);
        try {
            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("category", selectedCategory);
            formData.append("userId", userId.toString());
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/api/auth/documents/uploades", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: (progressEvent)=>{
                    if (progressEvent.total) {
                        const percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                        setUploadProgress(percentCompleted);
                    }
                }
            });
            if (response.data.success) {
                setUploadResult(response.data);
                setTimeout(()=>{
                    setSelectedFile(null);
                    setSelectedCategory("");
                    setUploadProgress(0);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                }, 2000);
            } else {
                setError(response.data.error || "Upload failed");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("Upload error:", err);
            setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || "Network error. Please try again.");
        } finally{
            setIsUploading(false);
        }
    };
    // Show loading state while fetching userId
    if (isLoadingUserId) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadContainer,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadWrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
                            children: "Upload Medical Document"
                        }, void 0, false, {
                            fileName: "[project]/app/documents/uploads/page.tsx",
                            lineNumber: 189,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageSubtitle,
                            children: "Loading..."
                        }, void 0, false, {
                            fileName: "[project]/app/documents/uploads/page.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/documents/uploads/page.tsx",
                    lineNumber: 188,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/documents/uploads/page.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/documents/uploads/page.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadContainer,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadWrapper,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageHeader,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageTitle,
                            children: "Upload Medical Document"
                        }, void 0, false, {
                            fileName: "[project]/app/documents/uploads/page.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageSubtitle,
                            children: "Securely upload and organize your medical documents for easy access and management"
                        }, void 0, false, {
                            fileName: "[project]/app/documents/uploads/page.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/documents/uploads/page.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadCard,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadForm,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                        children: [
                                            "📁 Document Category ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/documents/uploads/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryGrid,
                                        children: DOCUMENT_CATEGORIES.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryCard, " ").concat(selectedCategory === category.value ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""),
                                                onClick: ()=>setSelectedCategory(category.value),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryIcon,
                                                        children: category.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryName,
                                                        children: category.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].categoryDescription,
                                                        children: category.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, category.value, true, {
                                                fileName: "[project]/app/documents/uploads/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/documents/uploads/page.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formGroup,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "document-file-input",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formLabel,
                                        children: [
                                            "📎 Select Document ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].required,
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/app/documents/uploads/page.tsx",
                                                lineNumber: 234,
                                                columnNumber: 36
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileDropZone, " ").concat(isDragActive ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dragActive : "", " ").concat(selectedFile ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasFile : ""),
                                        onDragOver: (e)=>e.preventDefault(),
                                        onDragEnter: ()=>setIsDragActive(true),
                                        onDragLeave: ()=>setIsDragActive(false),
                                        onDrop: handleDrop,
                                        onClick: ()=>{
                                            var _fileInputRef_current;
                                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: fileInputRef,
                                                id: "document-file-input",
                                                type: "file",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hiddenFileInput,
                                                onChange: handleFileInputChange,
                                                accept: ".pdf,.jpg,.jpeg,.png,.gif,.webp,.doc,.docx"
                                            }, void 0, false, {
                                                fileName: "[project]/app/documents/uploads/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            !selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadIcon,
                                                        children: "📁"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadText,
                                                        children: isDragActive ? "Drop file here" : "Drag and drop your file here"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadSubtext,
                                                        children: "or click to browse (PDF, Images, Word docs - Max 10MB)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 261,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].browseButton,
                                                        children: "📎 Browse Files"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileInfo,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileIcon, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][getFileIcon(selectedFile.type)]),
                                                        children: getFileIcon(selectedFile.type) === "pdf" ? "PDF" : getFileIcon(selectedFile.type) === "image" ? "🖼️" : getFileIcon(selectedFile.type) === "document" ? "📄" : "📋"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileDetails,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileName,
                                                                children: selectedFile.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/documents/uploads/page.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileSize,
                                                                children: formatFileSize(selectedFile.size)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/documents/uploads/page.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].removeFileButton,
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            removeSelectedFile();
                                                        },
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/documents/uploads/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/documents/uploads/page.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            isUploading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].uploadProgress,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressText,
                                        children: [
                                            "Uploading document... ",
                                            uploadProgress,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                        lineNumber: 303,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressBar,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progressFill,
                                            style: {
                                                width: "".concat(uploadProgress, "%")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/documents/uploads/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/documents/uploads/page.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/documents/uploads/page.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].errorMessage,
                                children: [
                                    "❌ ",
                                    error
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/documents/uploads/page.tsx",
                                lineNumber: 313,
                                columnNumber: 23
                            }, this),
                            uploadResult && uploadResult.success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successMessage,
                                children: [
                                    "✅ ",
                                    uploadResult.message
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/documents/uploads/page.tsx",
                                lineNumber: 317,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitButton,
                                disabled: !selectedFile || !selectedCategory || isUploading || !userId,
                                children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$document$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadingSpinner
                                        }, void 0, false, {
                                            fileName: "[project]/app/documents/uploads/page.tsx",
                                            lineNumber: 328,
                                            columnNumber: 19
                                        }, this),
                                        "Uploading..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "🚀 Upload Document"
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/app/documents/uploads/page.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/documents/uploads/page.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/documents/uploads/page.tsx",
                    lineNumber: 207,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/documents/uploads/page.tsx",
            lineNumber: 199,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/documents/uploads/page.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_s(UploadDocumentPage, "w7MdnsyTtMuYPB0JtvQEvOZmiN8=");
_c = UploadDocumentPage;
function UploadDocumentPage2() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadDocumentPage, {}, void 0, false, {
            fileName: "[project]/app/documents/uploads/page.tsx",
            lineNumber: 345,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/documents/uploads/page.tsx",
        lineNumber: 344,
        columnNumber: 5
    }, this);
}
_c1 = UploadDocumentPage2;
var _c, _c1;
__turbopack_context__.k.register(_c, "UploadDocumentPage");
__turbopack_context__.k.register(_c1, "UploadDocumentPage2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_cbc01294._.js.map