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
      type: "relationship",
      required: true,
      relationTo: "media",
      hasMany:true// Adjust the relationTo value based on your data model
    },
    {
      name: "type",
      type: "text",
    },
    {
      name: "date",
      type: "date",
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
    },
    {
      name: "location",
      type: "text",
    },
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizationResponse",
      hasMany: false,
    },
  ],
};

export default HighlightResponseAttributes;
