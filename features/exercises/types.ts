export type Category = 'fuerza' | 'cardio' | 'movilidad';

export interface Exercise {
    id: number;
    name: string;
    category: Category;
    muscle: string;
    durationMin: number;
    description: string;
    image: string;
}

export const CATEGORIES: { value: Category; label: string }[] = [
    { value: 'fuerza', label: 'Fuerza' },
    { value: 'cardio', label: 'Cardio' },
    { value: 'movilidad', label: 'Movilidad' },
];

export const DURATIONS: { value: string; label: string }[] = [
    { value: '5', label: 'Hasta 5 min' },
    { value: '10', label: 'Hasta 10 min' },
];


export const CATEGORY_COLORS: Record<Category, string> = {
    fuerza: '#5454e9',
    cardio: '#e9683b',
    movilidad: '#4cb979',
};