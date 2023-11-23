import { CollectionConfig } from "payload/types";

const AboutSectionResponseAttributes: CollectionConfig = {
  slug: "aboutSectionResponse",
  admin: {
    useAsTitle: "tabTitle",
  },
  auth: true,
  fields: [
    {
      name: "tabTitle",
      type: "text",
      required: true,
    },
    {
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: "content",
      type: "relationship",
      required: true,
      relationTo: "aboutContentResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default AboutSectionResponseAttributes;
