import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blogs: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    projects: defineCollection({
      type: 'data',
      source: 'data/projects/**.json',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        invlovement: z.string(),
        Job: z.string(),
        imageUrl: z.string(),
        builtWith: z.string(),
        link: z.string(),
      })
    })
  }
})