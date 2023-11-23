import { CollectionConfig } from "payload/types";

const EventResponseAttributes: CollectionConfig = {
  slug: "eventResponse",
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "event_date",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },

    {
      name: "eventLocation",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizationResponse",
      hasMany: false,
    },
  ],
};

export default EventResponseAttributes;
