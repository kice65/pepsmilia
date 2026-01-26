module.exports = [
"[project]/src/pages/book.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckCircleIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/CheckCircleIcon.js [ssr] (ecmascript) <export default as CheckCircleIcon>");
;
;
;
function BookingForm() {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: "",
        email: "",
        service: "",
        date: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const handleChange = (e)=>setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus("Saving...");
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (res.ok) {
                setStatus("Booking successful!");
                setFormData({
                    name: "",
                    email: "",
                    service: "",
                    date: ""
                });
            } else setStatus(`Error: ${data.error}`);
        } catch (err) {
            setStatus(`Error: ${err.message}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-brandGray p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "bg-white p-8 rounded-xl shadow-lg w-full max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold mb-6 text-center text-brandBlue font-heading",
                    children: "Book a Service"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                    className: "block mb-2 font-semibold",
                    children: "Name"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "name",
                    required: true,
                    value: formData.name,
                    onChange: handleChange,
                    className: "w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                    className: "block mb-2 font-semibold",
                    children: "Email"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: "email",
                    name: "email",
                    required: true,
                    value: formData.email,
                    onChange: handleChange,
                    className: "w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 47,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                    className: "block mb-2 font-semibold",
                    children: "Service"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("select", {
                    name: "service",
                    required: true,
                    value: formData.service,
                    onChange: handleChange,
                    className: "w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: "",
                            children: "Select a service"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/book.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: "Consultation",
                            children: "Consultation"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/book.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: "Cleaning",
                            children: "Cleaning"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/book.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("option", {
                            value: "Other",
                            children: "Other"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/book.js",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                    className: "block mb-2 font-semibold",
                    children: "Preferred Date"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                    type: "date",
                    name: "date",
                    required: true,
                    value: formData.date,
                    onChange: handleChange,
                    className: "w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brandLightBlue"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "w-full bg-brandLightBlue text-white py-2 rounded-lg hover:bg-brandBlue transition mb-4",
                    children: "Book Now"
                }, void 0, false, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "flex items-center justify-center text-center text-green-600 font-semibold",
                    children: [
                        status.includes("successful") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$CheckCircleIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                            className: "w-5 h-5 mr-2"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/book.js",
                            lineNumber: 89,
                            columnNumber: 47
                        }, this),
                        status
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/pages/book.js",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/pages/book.js",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/pages/book.js",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__98bad9d3._.js.map