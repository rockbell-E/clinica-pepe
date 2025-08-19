import { defineCollection, z } from "astro:content";

const unidades = defineCollection({
    schema: z.object({
        title: z.string()
    })
})

export const collections = { unidades }