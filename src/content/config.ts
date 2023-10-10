import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    thumbnail: z.string().optional(),
    createDate: z.date(),
  }),
});

export const collections = {
  post: postCollection,
};
