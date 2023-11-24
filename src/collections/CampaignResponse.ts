import { CollectionConfig } from "payload/types";

const CampaignResponseAttributes: CollectionConfig = {
  slug: "campaignResponse",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  auth: true,
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
      name: "type",
      type: "text",
      required: true,
    },
    {
      name: "date",
      type: "text",
      required: true,
    },
    {
      name: "time",
      type: "text",
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
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
  ],
};

export default CampaignResponseAttributes;
