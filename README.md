# Tarea corte 4 – Next.js avanzado (partes 1 y 2)

Sofía Mejía

## Cómo correrlo

### 1. Backend (NestJS del curso)
Usa la rama `week-12/backend-config-for-frontend` del repo del curso, con `PORT=4000` en su `.env`:
```bash
docker compose up -d --build
docker exec -i postgres-db psql -U postgres -d mydatabase < db/scripts/inserts.sql
```

### 2. Frontend (este repo)
```bash
npm install
npm run dev
```
Abrir `http://localhost:3000/register`, crear un usuario (contraseña de mínimo 8 caracteres) e iniciar sesión.

## Qué incluye

### Parte 1: ejercicios
- `/exercises`: catálogo con Server Components, `next/image`, `loading.tsx`, `Suspense` con esqueletos y filtros en la URL (texto, categoría y duración).
- `/exercises/[id]`: detalle con `generateStaticParams`, `generateMetadata` y `not-found`.

### Parte 2: rutinas
- `/api/routines`: Route Handler con GET (acepta `?level=`) y POST.
- `/routines/new`: formulario con Server Actions, `useActionState` y validación en el servidor.
- `/routines/[id]`: checklist con `useOptimistic`.
- Detalle del ejercicio en un modal (rutas paralelas `@modal` e interceptadas `(.)exercises`).
- Tema guardado en cookie, fuente Poppins con `next/font`, `sitemap.xml`, `robots.txt` e imagen Open Graph.

## Retos hechos
- **Parte 1:** filtro por duración en la URL, insignia con el color de cada categoría, prueba de `router.replace` vs `router.push`.
- **Parte 2:** eliminar rutinas con una Server Action, tercer tema (`icesi-contraste`) que recorre los tres, `routines/[id]/loading.tsx` y filtro `?level=` en `GET /api/routines`.

## Nota
Las rutinas viven en memoria del servidor de Next (como pide la guía), así que se reinician al reiniciar `npm run dev`.