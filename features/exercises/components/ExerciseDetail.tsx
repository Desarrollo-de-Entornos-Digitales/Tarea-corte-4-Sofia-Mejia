import Image from 'next/image';
import type { Exercise } from '../types';
import { CategoryBadge } from './CategoryBadge';

export function ExerciseDetail({ exercise }: { exercise: Exercise }) {
    return (
        <article className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-box">
                <Image
                    src={exercise.image}
                    alt={exercise.name}
                    fill
                    priority
                    sizes="(min-width: 896px) 896px, 100vw"
                    className="object-cover"
                />
            </div>

            <h1 className="text-2xl font-bold">{exercise.name}</h1>
            <div className="flex flex-wrap items-center gap-2">
                <CategoryBadge category={exercise.category} />
                <span className="badge badge-outline">{exercise.muscle}</span>
                <span className="text-sm opacity-70">{exercise.durationMin} minutos</span>
            </div>
            <p>{exercise.description}</p>
        </article>
    );
}