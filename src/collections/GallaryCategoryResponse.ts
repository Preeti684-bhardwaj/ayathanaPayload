import { CollectionConfig } from "payload/types";

const GalleryCategoryResponseAttributes: CollectionConfig = {
  slug: "galleryCategoryResponse",
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
      name: "Gallery_Response",
      type: "relationship",
      relationTo: "galleryResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default GalleryCategoryResponseAttributes;
