import Link from 'next/link';
import { deleteRoutineAction } from '@/features/routines/actions';
import { routinesStore } from '@/features/routines/store';
import { LEVELS } from '@/features/routines/types';

export const metadata = { title: 'Rutinas' };

// Esta página no llama a /api/routines: en un Server Component se lee el dato directamente
export default function RoutinesPage() {
    const routines = routinesStore.list();

    return (
        <div className="flex flex-col gap-6">
            <header className="flex items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Rutinas</h1>
                    <p className="text-sm opacity-70">Combina ejercicios y marca lo que ya hiciste.</p>
                </div>
                <Link href="/routines/new" className="btn btn-primary btn-sm">Nueva rutina</Link>
            </header>

            {routines.length === 0 && (
                <p className="rounded-box border border-dashed border-base-300 p-8 text-center opacity-70">
                    Todavía no tienes rutinas.
                </p>
            )}

            <ul className="grid gap-4 sm:grid-cols-2">
                {routines.map((routine) => (
                    <li key={routine.id} className="card bg-base-100 shadow-sm transition-shadow hover:shadow-md">
                        <div className="card-body gap-2 p-4">
                            <Link href={`/routines/${routine.id}`} className="card-title text-base hover:underline">
                                {routine.name}
                            </Link>
                            <p className="text-sm opacity-70">{routine.description}</p>
                            <div className="flex items-center gap-2">
                                <span className="badge badge-secondary badge-sm">
                                    {LEVELS.find((level) => level.value === routine.level)?.label}
                                </span>
                                <span className="text-xs opacity-70">{routine.exerciseIds.length} ejercicios</span>

                                {/* Reto 1: el botón envía un form cuya acción es una Server Action */}
                                <form action={deleteRoutineAction.bind(null, routine.id)} className="ml-auto">
                                    <button type="submit" className="btn btn-ghost btn-xs text-error">
                                        Eliminar
                                    </button>
                                </form>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
