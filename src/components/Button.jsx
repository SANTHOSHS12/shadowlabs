import React from "react";

export default function Button({ children, variant = "primary", className = "", ...props }) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 relative overflow-hidden tracking-wide border border-transparent",
        secondary: "bg-white text-gray-900 border border-gray-200 hover:border-gray-900 hover:bg-gray-50 rounded-full shadow-sm hover:shadow-md transition-all duration-300",
        dark: "bg-[#0F172A] text-white hover:bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent",
        outline: "bg-transparent text-gray-900 border-2 border-gray-200 hover:border-gray-900 hover:bg-transparent rounded-full transition-all duration-300",
        ghost: "text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes.md; // Default to medium for now, can add prop

    return (
        <button className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`} {...props}>
            {children}
        </button>
    );
}
