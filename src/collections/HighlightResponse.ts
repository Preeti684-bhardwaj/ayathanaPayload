import { CollectionConfig } from "payload/types";

const HighlightResponseAttributes: CollectionConfig = {
  slug: "highlightResponse",
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
      type: "text",
      required: true,
    },
    {
      name: "media_list",
      type: "upload",
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
    {
      name: "type",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },
    {
      name: "time",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "timeOnly"
        },
      },
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
  ],
};

export default HighlightResponseAttributes;
