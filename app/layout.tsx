import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

// next/font descarga la tipografía al hacer el build y la sirve desde tu propio sitio
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    // Base para armar las URLs absolutas de las imágenes al compartir (Open Graph)
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: { default: "Rutinas de ejercicio", template: "%s | Entrenamiento" },
    description: "Explora ejercicios, arma tus rutinas y marca lo que ya hiciste.",
};

// Reto 2: solo se aceptan estos temas; cualquier otro valor de la cookie vuelve al claro
const THEMES = ["icesi", "icesi-dark", "icesi-contraste"];

// "async" porque leemos la cookie del tema en el servidor antes de pintar
export default async function RootLayout({ children }: LayoutProps<"/">) {
    const saved = (await cookies()).get("theme")?.value ?? "icesi";
    const theme = THEMES.includes(saved) ? saved : "icesi";

    return (
        <html
            lang="es"
            data-theme={theme}
            className={`${poppins.className} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">{children}</body>
        </html>
    );
}
