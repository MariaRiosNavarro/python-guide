import { CollectionConfig } from "payload/types";

export const pythonCards: CollectionConfig = {
  slug: "python-cards",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Básico", value: "basic" },
        { label: "Intermedio", value: "intermediate" },
        { label: "Avanzado", value: "advanced" },
      ],
      required: true,
    },
    {
      name: "codeExample",
      type: "code",
      required: true,
    },
  ],
};
