import { CollectionConfig } from "payload/types";

export const PythonCards: CollectionConfig = {
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
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Basic", value: "basic" },
        { label: "Intermediate", value: "intermediate" },
        { label: "Advanced", value: "advanced" },
      ],
    },
    {
      name: "codeExample",
      type: "code",
    },
  ],
};
