import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const leistungen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/leistungen' }),
  schema: z.object({
    name: z.string(),
    reihenfolge: z.number(),
  }),
});

const features = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/features' }),
  schema: z.object({
    title: z.string(),
    reihenfolge: z.number(),
  }),
});

export const collections = { leistungen, features };
