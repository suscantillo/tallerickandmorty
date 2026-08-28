# Contexto para asistentes de IA

Este repo es un taller universitario (grupos de 3). El enunciado completo está en [documento.md](documento.md), léelo antes de tocar código. Este archivo es para el asistente de IA (Claude Code, Copilot, Cursor, etc.) de cada integrante.

## Reglas de flujo de trabajo (GitHub Flow, obligatorio para la nota)

- Nunca hagas commit ni push directo sobre `main`. Trabaja siempre en la rama del integrante que te está usando.
- No cambies de rama para "ayudar" con la parte de otro compañero sin que él lo pida explícitamente.
- El cambio entra a `main` solo mediante Pull Request, y solo después de que otro integrante lo revisó. No mergees PRs tú mismo.
- Los commits deben quedar a nombre del integrante real (su usuario de git), no del asistente. No te agregues como autor, coautor ni colaborador en ningún commit, PR o archivo.

## Nivel de código esperado

- Este es un taller de estudiantes, no un producto en producción. No introduzcas patrones de arquitectura, librerías extra, capas de abstracción o manejo de errores que el enunciado no pide.
- Comentarios cortos y solo cuando algo no es obvio. Nada de bloques de comentarios largos ni docstrings.
- Sin emojis en código, commits, ni PRs.
- Sigue el estilo ya presente en `src/` (nombres en español, funciones simples, un archivo por responsabilidad).

## Dónde va cada cosa

| Parte del taller | Archivo | Rama sugerida |
| --- | --- | --- |
| Parte C (fetch secuencial y concurrente) | `src/services/rickAndMortyApi.js` | compartida / la primera que la necesite |
| Parte A (normalización con map) | `src/utils/normalizar.js` | `feature/normalizacion` |
| Parte B.1-B.5 (filter/find/some/every) | `src/utils/consultas.js` | `feature/consultas` |
| Parte B.6-B.7 (reduce) | `src/utils/estadisticas.js` | `feature/estadisticas` |

Las funciones que faltan están marcadas con `// TODO` y lanzan `throw new Error(...)` a propósito. Reemplaza el cuerpo, no cambies la firma de la función ni la ruta del archivo salvo que el equipo lo acuerde.

## Qué no hacer

- No resuelvas las 4 partes del taller de una sola vez en un solo PR gigante: cada integrante entrega su propia funcionalidad.
- No le des al estudiante la solución completa sin que la entienda; el objetivo es que aprenda `map`/`filter`/`find`/`some`/`every`/`reduce` y `Promise.all`, que es justo lo que se evalúa.
- No agregues frameworks de testing, TypeScript, ORM, ni nada que el enunciado no pida.
- No toques `documento.md` (es el enunciado del profesor).
