import { CollectionConfig } from "payload/types";

const ContactResponseAttributes: CollectionConfig = {
  slug: "contactResponse",
  admin: {
    useAsTitle: "website",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "phone1",
      type: "text",
    },
    {
      name: "phone2",
      type: "text",
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "linkedin",
      type: "text",
    },
    {
      name: "twitter",
      type: "text",
    },
    {
      name: "facebook",
      type: "text",
    },
    {
      name: "youtube",
      type: "text",
    },
    {
      name: "instagram",
      type: "text",
    },
    {
      name: "email1",
      type: "text",
    },
    {
      name: "email2",
      type: "text",
    },
    {
    name :"address",
    type:'relationship',
    relationTo:'addressResponse',
    hasMany:true,
    required:true
    },
    {
      name: "qrCodes",
      type: "relationship",
      relationTo: "qrcodeResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default ContactResponseAttributes;
