/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            spacing: {
                "71px": "71px",
                "24px": "24px",
                "32px": "32px",
                "26px": "26px",
                "18px": "18px",
                "40px": "40px",
                "28px": "28px",
                "4px": "4px",
                "17px": "17px",
                "16px": "16px",
            },
            borderRadius: {
                "8px": "8px",
                "50%": "50%",
            },
            borderWidth: {
                "2px": "2px",
            },
            colors: {
                bg: "#ECF2F8",
                purple: "#733FC8",
                white: "#fff",
                gray: "#CFCFCF",
                "purple-lighter": "#A775F1",
            },
            fontSize: {
                "11px": "11px",
                "13px": "11px",
                "20px": "16px",
            },
            fontWeight: {
                500: "500",
                600: "600",
            },
            lineHeight: {
                "11px": "11px",
                "13px": "13px",
                "24px": "24px",
                "18px": "18px",
            },
            boxShadow: {
                box: "40px 60px 50px -47px rgba(72, 85, 106, 0.247378)",
            },
        },
    },
    plugins: [],
};
