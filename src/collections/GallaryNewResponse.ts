import { CollectionConfig } from "payload/types";

const GalleryNewResponseAttributes: CollectionConfig = {
  slug: "galleryNewResponse",
  admin: {
    useAsTitle: "media_data",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "media_data",
      type: "relationship",
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
    {
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: "qrcode",
      type: "relationship",
      relationTo: "qrcodeResponse",
    },
  ],
};

export default GalleryNewResponseAttributes;
