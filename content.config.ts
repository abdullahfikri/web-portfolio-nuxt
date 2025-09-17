/**
 * @file content.config.ts
 * @description Nuxt Content configuration file.
 * This file is used to define the content collections for the application,
 * specifying where the content is sourced from and what schema it should follow.
 * @see https://content.nuxt.com/usage/configuration
 */
import {defineCollection, defineContentConfig} from "@nuxt/content";
import { z } from 'zod/v4'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/**/*.md',
            schema: z.object({
                /** The main title of the blog post. Max 60 characters. */
                title: z.string().max(100),
                /** An optional subtitle for the blog post. Max 60 characters. */
                subtitle: z.string().max(60).optional(),
                /** A short description of the blog post, used for SEO and previews. Max 250 characters. */
                description: z.string().max(250),
                /** The date the blog post was published. */
                publishDate: z.date(),
                /** An optional array of tags for categorizing the blog post. */
                tags: z.array(z.string()).max(3).min(1),
                /** A flag to indicate if the blog post is a draft. Defaults to false. */
                isDraft: z.boolean().default(false),
            })
        })
    }
})