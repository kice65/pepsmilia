module.exports = [
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/src/utils/firebase.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__ = __turbopack_context__.i("[externals]/firebase/app [external] (firebase/app, esm_import, [project]/node_modules/firebase)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import, [project]/node_modules/firebase)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
};
const app = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$app__$5b$external$5d$__$28$firebase$2f$app$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__["getFirestore"])(app);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/utils/stripe.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getStripe",
    ()=>getStripe
]);
// src/utils/stripe.ts
var __TURBOPACK__imported__module__$5b$externals$5d2f40$stripe$2f$stripe$2d$js__$5b$external$5d$__$2840$stripe$2f$stripe$2d$js$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$29$__ = __turbopack_context__.i("[externals]/@stripe/stripe-js [external] (@stripe/stripe-js, cjs, [project]/node_modules/@stripe/stripe-js)");
;
let stripePromise = null;
const getStripe = ()=>{
    if (!stripePromise) {
        const key = ("TURBOPACK compile-time value", "pk_test_51Hf58OC4AfxNqxpDItwixDwMkPEavZLWQI3gVQAlvdTYkylcl7qbrPiVL2928qzJ0CEk7smmsXeIPQK7zJPNqnyD00gndvScBC");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            stripePromise = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$stripe$2f$stripe$2d$js__$5b$external$5d$__$2840$stripe$2f$stripe$2d$js$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$29$__["loadStripe"])(key);
        }
    }
    return stripePromise;
};
}),
"[project]/src/components/BookingForm.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>BookingForm
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/firebase.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__ = __turbopack_context__.i("[externals]/firebase/firestore [external] (firebase/firestore, esm_import, [project]/node_modules/firebase)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$emailjs$2f$browser__$5b$external$5d$__$2840$emailjs$2f$browser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$29$__ = __turbopack_context__.i("[externals]/@emailjs/browser [external] (@emailjs/browser, cjs, [project]/node_modules/@emailjs/browser)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stripe$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/stripe.ts [ssr] (ecmascript)"); // fixed import
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"use client";
;
;
;
;
;
;
function BookingForm() {
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus("loading");
        try {
            // 1️⃣ Save booking to Firestore
            await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$firebase$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["db"], "bookings"), {
                ...form,
                createdAt: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$firebase$2f$firestore__$5b$external$5d$__$28$firebase$2f$firestore$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$firebase$29$__["serverTimestamp"])(),
                paid: false
            });
            // 2️⃣ Send EmailJS
            if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
                throw new Error("EmailJS environment variables not set!");
            }
            await __TURBOPACK__imported__module__$5b$externals$5d2f40$emailjs$2f$browser__$5b$external$5d$__$2840$emailjs$2f$browser$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$29$__["default"].send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, {
                ...form
            }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
            // 3️⃣ Stripe Checkout
            const stripe = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$stripe$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getStripe"])(); // use getStripe() util
            if (!stripe) throw new Error("Stripe failed to initialize");
            const res = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await res.json();
            // ✅ TS fix: cast stripe to any for redirectToCheckout
            const result = await stripe.redirectToCheckout({
                sessionId: data.id
            });
            if (result?.error) throw result.error;
            setStatus("success");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 max-w-md mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                type: "text",
                name: "name",
                placeholder: "Name",
                required: true,
                value: form.name,
                onChange: handleChange,
                className: "p-3 border rounded"
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                type: "email",
                name: "email",
                placeholder: "Email",
                required: true,
                value: form.email,
                onChange: handleChange,
                className: "p-3 border rounded"
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                name: "message",
                placeholder: "Message",
                required: true,
                value: form.message,
                onChange: handleChange,
                className: "p-3 border rounded"
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "bg-blue-600 text-white p-3 rounded",
                children: status === "loading" ? "Processing..." : "Book & Pay"
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-red-500 mt-2",
                children: "Error, please try again."
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this),
            status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                className: "text-green-500 mt-2",
                children: "Booking saved! Redirecting to payment..."
            }, void 0, false, {
                fileName: "[project]/src/components/BookingForm.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BookingForm.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/Testimonials.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
function Testimonials() {
    const data = [
        {
            name: "Stephanie, CEO Digitech",
            message: "The team guided me from school selection to study permit approval, making my dream to study in Canada a reality."
        },
        {
            name: "James, Student",
            message: "Smooth and stress-free process. Highly recommend Pepsmilia Consult!"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-8",
        children: data.map((t, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                className: "p-6 bg-white rounded-xl shadow-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-gray-700 mb-2",
                        children: [
                            '"',
                            t.message,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Testimonials.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                        className: "font-bold",
                        children: t.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/Testimonials.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/src/components/Testimonials.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/Testimonials.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ArrowRightIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ArrowRightIcon.js [ssr] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BookingForm.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Testimonials.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import, [project]/node_modules/framer-motion)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
function Home() {
    const services = [
        "School Search",
        "Work Permit",
        "Permanent Residency",
        "Visa Services",
        "Flight Booking"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: "bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6 md:px-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mt-12 md:mt-24 gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "flex-1 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].h1, {
                                initial: {
                                    y: -50,
                                    opacity: 0
                                },
                                animate: {
                                    y: 0,
                                    opacity: 1
                                },
                                transition: {
                                    duration: 0.8
                                },
                                className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                                children: "Book Your Services Online Effortlessly"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.jsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].p, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.5
                                },
                                className: "text-lg md:text-xl text-gray-700 mb-8",
                                children: "Schedule appointments, manage bookings, and explore services all in one platform."
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.jsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/book",
                                    className: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg inline-flex items-center shadow-lg transition duration-300",
                                    children: [
                                        "Book Now ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ArrowRightIcon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                            className: "w-5 h-5 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/index.jsx",
                                            lineNumber: 45,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/index.jsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/pages/index.jsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                        initial: {
                            x: 50,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        transition: {
                            duration: 1
                        },
                        className: "flex-1 flex justify-center md:justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/hero-image.jpg",
                            alt: "Online booking illustration",
                            width: 500,
                            height: 400,
                            className: "rounded-lg shadow-2xl"
                        }, void 0, false, {
                            fileName: "[project]/src/pages/index.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "services",
                className: "py-20 w-full max-w-6xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900",
                        children: "Our Services"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8",
                        children: services.map((service, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$framer$2d$motion$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.05
                                },
                                className: "p-6 bg-white rounded-xl shadow-lg text-center transition-transform duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: `/icons/${service.toLowerCase().replace(/ /g, '-')}.png`,
                                        alt: service,
                                        width: 64,
                                        height: 64,
                                        className: "mx-auto mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-semibold mb-2 text-gray-800",
                                        children: service
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/index.jsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: [
                                            "Expert guidance to help you achieve ",
                                            service.toLowerCase(),
                                            " success."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/pages/index.jsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/src/pages/index.jsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "testimonials",
                className: "bg-gray-100 py-20 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900",
                        children: "Testimonials"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Testimonials$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "booking",
                className: "py-20 w-full max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900",
                        children: "Book a Consultation"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BookingForm$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/pages/index.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                className: "mt-20 py-8 text-gray-500 text-sm text-center border-t border-gray-200 w-full",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Pepsmilia. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/index.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c255650f._.js.map