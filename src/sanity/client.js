import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "./env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // rápido (cache)
});

// Lee contenido de Sanity. Si algo falla o no hay contenido,
// devuelve `fallback` (así la web NUNCA se rompe).
export async function sanityFetch(query, params = {}, fallback = null) {
  try {
    const data = await client.fetch(query, params, {
      next: { revalidate: 60 }, // revalida cada 60s
    });
    return data ?? fallback;
  } catch (e) {
    console.error("Sanity fetch error:", e?.message);
    return fallback;
  }
}
