import { CollectionConfig } from "payload/types";

const AboutSectionResponseAttributes: CollectionConfig = {
  slug: "aboutSectionResponse",
  admin: {
    useAsTitle: "Title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "Title",
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
    }
  ],
};

export default AboutSectionResponseAttributes;
