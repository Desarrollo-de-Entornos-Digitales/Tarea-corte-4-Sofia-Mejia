'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';

// Un archivo "use server" solo puede exportar funciones async: las constantes no se exportan
// Reto 2: el botón recorre los tres temas en este orden
const THEMES = ['icesi', 'icesi-dark', 'icesi-contraste'];

// Pasa al siguiente tema y lo recuerda en una cookie
export async function toggleThemeAction(): Promise<void> {
    const store = await cookies();
    const current = THEMES.indexOf(store.get('theme')?.value ?? 'icesi');
    const next = THEMES[(current + 1) % THEMES.length];

    store.set('theme', next, { path: '/', maxAge: 60 * 60 * 24 * 365 });
    revalidatePath('/', 'layout'); // vuelve a pintar toda la app con el tema nuevo
}
