import { CollectionConfig } from "payload/types";

const CampaignResponseAttributes: CollectionConfig = {
  slug: "campaignResponse",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  auth: {
    cookies:{
      secure:process.env.PAYLOAD_ENV!=='development',
      sameSite:process.env.PAYLOAD_ENV==='testing'?'none':'lax',
    }
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
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          
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
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
  ],
};

export default CampaignResponseAttributes;
