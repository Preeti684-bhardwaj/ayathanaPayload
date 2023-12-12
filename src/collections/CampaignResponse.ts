import { CollectionConfig } from "payload/types";

const CampaignResponseAttributes: CollectionConfig = {
  slug: "campaignResponse",
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
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: "type",
      type: "select", // required
      hasMany: false,
      required: true,
      options: [
        {
          label: "Previous",
          value: "Previous",
        },
        {
          label: "On going",
          value: "On going",
        },
        {
          label: "Upcoming",
          value: "Upcoming",
        },
      ],
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
          pickerAppearance: "timeOnly",
        },
      },
      required: true,
    },

    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "media_list",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
    },
  ],
};

export default CampaignResponseAttributes;
