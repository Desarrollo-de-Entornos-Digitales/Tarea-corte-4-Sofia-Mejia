import { CATEGORIES, CATEGORY_COLORS, type Category } from '../types';

export function CategoryBadge({ category, size = 'md' }: { category: Category; size?: 'sm' | 'md' }) {
    const label = CATEGORIES.find((c) => c.value === category)?.label;

    return (
        <span
            className={`badge border-0 text-white ${size === 'sm' ? 'badge-sm' : ''}`}
            style={{ backgroundColor: CATEGORY_COLORS[category] }}
        >
            {label}
        </span>
    );
}