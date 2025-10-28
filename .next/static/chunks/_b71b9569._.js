(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/styles/heamburger.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "brandName": "heamburger-module__b281CG__brandName",
  "btn": "heamburger-module__b281CG__btn",
  "closeBtn": "heamburger-module__b281CG__closeBtn",
  "fadeInOverlay": "heamburger-module__b281CG__fadeInOverlay",
  "hamburger": "heamburger-module__b281CG__hamburger",
  "hamburgerLine": "heamburger-module__b281CG__hamburgerLine",
  "line": "heamburger-module__b281CG__line",
  "line1": "heamburger-module__b281CG__line1",
  "line2": "heamburger-module__b281CG__line2",
  "line3": "heamburger-module__b281CG__line3",
  "logo": "heamburger-module__b281CG__logo",
  "logout": "heamburger-module__b281CG__logout",
  "logoutBtn": "heamburger-module__b281CG__logoutBtn",
  "mobileAuthButtons": "heamburger-module__b281CG__mobileAuthButtons",
  "mobileMenu": "heamburger-module__b281CG__mobileMenu",
  "mobileMenuHeader": "heamburger-module__b281CG__mobileMenuHeader",
  "mobileMenuOverlay": "heamburger-module__b281CG__mobileMenuOverlay",
  "mobileMenuWrapper": "heamburger-module__b281CG__mobileMenuWrapper",
  "mobileNavLink": "heamburger-module__b281CG__mobileNavLink",
  "mobileNavLinks": "heamburger-module__b281CG__mobileNavLinks",
  "navCenter": "heamburger-module__b281CG__navCenter",
  "navLink": "heamburger-module__b281CG__navLink",
  "navLinks": "heamburger-module__b281CG__navLinks",
  "navbar": "heamburger-module__b281CG__navbar",
  "open": "heamburger-module__b281CG__open",
  "signin": "heamburger-module__b281CG__signin",
  "slideInMenu": "heamburger-module__b281CG__slideInMenu",
});
}),
"[project]/app/(components)/MobileToggle/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenuClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/heamburger.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MobileMenuClient(param) {
    let { session } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    const closeMenu = ()=>setIsOpen(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuWrapper,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: isOpen ? "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open) : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger,
                onClick: toggleMenu,
                "aria-label": "Toggle mobile menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line
                    }, void 0, false, {
                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuOverlay,
                        onClick: closeMenu
                    }, void 0, false, {
                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenu,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileMenuHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/globe.svg",
                                        alt: "Arogya-Locker Logo",
                                        width: 32,
                                        height: 32
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandName,
                                        children: "Arogya-Locker"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].closeBtn,
                                        onClick: closeMenu,
                                        "aria-label": "Close menu",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLinks,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/documents",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLink,
                                        onClick: closeMenu,
                                        children: "Documents"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/chat",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLink,
                                        onClick: closeMenu,
                                        children: "Chat"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 42,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/profile",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLink,
                                        onClick: closeMenu,
                                        children: "Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    !session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/signin",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mobileNavLink,
                                        onClick: closeMenu,
                                        children: "LogIn"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        action: "/api/auth/signout",
                                        method: "post",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$heamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoutBtn,
                                            children: "Logout"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                            lineNumber: 48,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(components)/MobileToggle/MobileMenu.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(MobileMenuClient, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = MobileMenuClient;
var _c;
__turbopack_context__.k.register(_c, "MobileMenuClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b71b9569._.js.map