import { CollectionConfig } from "payload/types";

const EventResponseAttributes: CollectionConfig = {
  slug: "eventResponse",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "array",
      fields:[
        {
          name:'points',
          type:'text'
        },
      ],
      required: true,

    },
    {
      name: "event_date",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
    },

    {
      name: "eventLocation",
      type: "text",
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizationResponse",
      hasMany: true,
    },
    {
      name: "qrcode",
      type: "relationship",
      relationTo: "qrcodeResponse",
    },
    {
      name: "content_update",
      type: "relationship",
      relationTo: "contentUpdateResponse",
      hasMany:false,
    },
  ],
};

export default EventResponseAttributes;
