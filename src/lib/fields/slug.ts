import { Field } from "payload";
import { deepMerge, formatSlug } from "../utils";

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const slugField: Slug = (fieldToUse = "title", overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "slug",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
      index: true,
      label: "Slug",
      type: "text",
    },
    overrides,
  );