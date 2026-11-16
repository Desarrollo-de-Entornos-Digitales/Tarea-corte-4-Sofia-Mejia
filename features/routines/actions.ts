'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { routinesStore } from './store';
import { validateRoutine, type RoutineErrors } from './validation';

export interface FormState {
    errors?: RoutineErrors;
    values?: { name: string; description: string; level: string; exerciseIds: number[] };
}

// Se ejecuta en el servidor cuando se envía el formulario de "Nueva rutina"
export async function createRoutineAction(_prev: FormState, formData: FormData): Promise<FormState> {
    const values = {
        name: String(formData.get('name') ?? ''),
        description: String(formData.get('description') ?? ''),
        level: String(formData.get('level') ?? ''),
        exerciseIds: formData.getAll('exerciseIds').map(Number),
    };

    const errors = validateRoutine(values);
    if (Object.keys(errors).length > 0) {
        // Devolvemos también lo que escribió la persona para no vaciar el formulario
        return { errors, values };
    }

    routinesStore.create(values);
    revalidatePath('/routines'); // la lista de rutinas debe mostrar la nueva
    redirect('/routines');
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Marca o desmarca un ejercicio como hecho
export async function toggleDoneAction(routineId: number, exerciseId: number): Promise<void> {
    await delay(800); // simula una base de datos lenta para que se note la UI optimista
    routinesStore.toggleDone(routineId, exerciseId);
    revalidatePath(`/routines/${routineId}`);
}

// Reto 1: elimina una rutina desde el botón de la lista
export async function deleteRoutineAction(routineId: number): Promise<void> {
    routinesStore.remove(routineId);
    revalidatePath('/routines');
}
