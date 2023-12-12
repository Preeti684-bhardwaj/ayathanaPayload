import { CollectionConfig } from "payload/types";

const AboutContentResponseAttributes: CollectionConfig = {
  slug: "aboutContentResponse",
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
      relationTo: "media",
      hasMany: true, // Adjust the relationTo value based on your data model
    },
    
  ],
};

export default AboutContentResponseAttributes;
