import { CollectionConfig } from "payload/types";

const ContactResponseAttributes: CollectionConfig = {
  slug: "contactResponse",
  admin: {
    useAsTitle: "website",
  },
  access: {
    read: () => true,
  },
  auth:true,
  fields: [
    {
      name: "phone1",
      type: "text",
      required: true,
    },
    {
      name: "phone2",
      type: "text",
      required: true,
    },
    {
      name: "website",
      type: "text",
      required: true,
    },
    {
      name: "linkedin",
      type: "text",
      required: true,
    },
    {
      name: "twitter",
      type: "text",
      required: true,
    },
    {
      name: "facebook",
      type: "text",
      required: true,
    },
    {
      name: "youtube",
      type: "text",
      required: true,
    },
    {
      name: "instagram",
      type: "text",
      required: true,
    },
    {
      name: "email1",
      type: "text",
      required: true,
    },
    {
      name: "email2",
      type: "text",
      required: true,
    },
    {
      name: "qrCodes",
      type: "relationship",
      required: true,
      relationTo: "qrcodeResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default ContactResponseAttributes;
