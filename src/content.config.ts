import { defineCollection, z } from "astro:content";
import { notionLoader } from "notion-astro-loader";
import {
  notionPageSchema,
  propertySchema,
  transformedPropertySchema,
} from "notion-astro-loader/schemas";

const database = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_SECRET_KEY,
    database_id: import.meta.env.NOTION_DB_ID,
  }),
  schema: notionPageSchema({
    properties: z.object({
      // Converts to a primitive string
      //Name column and type of data
      Tarea: transformedPropertySchema.title,
      Estado: transformedPropertySchema.status,
      Descripción: transformedPropertySchema.rich_text,
      // Converts to a Notion API created_time object
      // Created: propertySchema.created_time.optional(),
    }),
  }),
});

export const collections = { database };
