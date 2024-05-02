/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // muy bien \
                darkCyan: "hsl(185, 75%, 39%)",
                veryDarkDesaturated: "hsl(229, 23%, 23%)",
                darkGrayishBlue: "hsl(227, 10%, 46%)",
                darkGray: "hsl(0, 0%, 59%)",
                fondoPaginaPokemon: "#19a2ae",
            },
            backgroundImage: {
                "pokemon-bg-pattern":
                    "url('./public/images/bg-pattern-card.svg')",
            }, // esto solo para un fondo es demasiado, mejor hacerlo direcatmente en el componente
        },
    },
    plugins: [],
};
