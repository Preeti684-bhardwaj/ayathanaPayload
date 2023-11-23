import { CollectionConfig } from "payload/types";

const GalleryNewResponseAttributes: CollectionConfig = {
  slug: "galleryNewResponse",
  auth: true,
  fields: [
    {
      name: "media_data",
      type: "relationship",
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
  ],
};

export default GalleryNewResponseAttributes;
