# Taller Rick and Morty


## Requisitos

- Node.js >= 20
- pnpm (`corepack enable` si no lo tienes activado)

## Instalación

```bash
pnpm install
pnpm dev
```

El servidor queda arriba en `http://localhost:3000`.

## Estructura

```
src/
  server.js               app de Express y arranque
  routes/                 definición de rutas
  controllers/            arman la respuesta de cada ruta
  services/rickAndMortyApi.js   consumo de la API (Parte C)
  utils/normalizar.js     normalización con map (Parte A)
  utils/consultas.js      filter / find / some / every (Parte B.1-B.5)
  utils/estadisticas.js   reduce (Parte B.6-B.7)
```

## Rutas

- `GET /personajes/todos` – arreglo crudo de la API
- `GET /personajes/normalizados` – Parte A
- `GET /personajes/consultas` – Parte B.1 a B.5
- `GET /personajes/estadisticas` – Parte B.6 y B.7
- `GET /personajes/benchmark` – compara tiempo secuencial vs concurrente (Parte C)

## Estado del bootstrap

Las rutas y la estructura ya funcionan. Las funciones marcadas con `TODO` en `services/` y `utils/` lanzan un error a propósito hasta que se implementen: eso es lo que cada rama debe resolver.

## Flujo de trabajo (GitHub Flow)

`main` se mantiene siempre estable. Nadie desarrolla directo sobre ella.

1. Cada integrante trabaja en su propia rama, por ejemplo:
   - `feature/normalizacion` → `src/utils/normalizar.js`
   - `feature/consultas` → `src/utils/consultas.js`
   - `feature/estadisticas` → `src/utils/estadisticas.js`
2. La Parte C (`src/services/rickAndMortyApi.js`) es infraestructura compartida: sin ella no se puede probar nada más. Decidan como equipo quién la implementa primero (puede ser una rama propia, ej. `feature/fetch-api`, o la resuelve quien la necesite primero y la sube en un PR chico).
3. Todo cambio entra a `main` mediante Pull Request.
4. Antes del merge, otro integrante debe revisar el PR y dejar un comentario o aprobación (ver plantilla en `.github/pull_request_template.md`).
5. Hagan commits desde su propia cuenta para que el historial muestre la participación de todos.

