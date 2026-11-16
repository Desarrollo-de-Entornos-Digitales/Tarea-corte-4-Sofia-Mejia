// Reto 3: se ve mientras Next prepara la página de una rutina (al entrar desde la lista)
export default function Loading() {
    return (
        <div className="flex flex-col gap-4" aria-label="Cargando rutina">
            <div className="skeleton h-8 w-32" />
            <div className="skeleton h-8 w-60" />
            <div className="skeleton h-2 w-full" />
            {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="skeleton h-12 w-full" />
            ))}
        </div>
    );
}
