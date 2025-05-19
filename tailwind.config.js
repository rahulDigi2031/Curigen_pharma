// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src",
      // where you use Tailwind CSS classes.
      // Example:
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
      // Or if using src directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      screens: {
        'below-sm': {'max': '639px'}, // Custom breakpoint for screens up to 639px
        'sm': '640px', // Default sm breakpoint
        'md': '768px', // Default md breakpoint
        'lg': '1024px', // Default lg breakpoint
        'xl': '1280px', // Default xl breakpoint
        '2xl': '1536px', // Default 2xl breakpoint
      },
      extend: {
        // Extend the default theme here (e.g., add custom colors, fonts, etc.)
      },
    },
    plugins: [
      // Add any Tailwind plugins you are using here
    ],
  }