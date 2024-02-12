import { CollectionConfig } from "payload/types";

const GalleryNewResponseAttributes: CollectionConfig = {
  slug: "galleryNewResponse",
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
      name: "Gallery_Category",
      type: "relationship",
      relationTo: "galleryCategoryResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default GalleryNewResponseAttributes;
