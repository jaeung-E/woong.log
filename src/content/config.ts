import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  post: postCollection,
};
