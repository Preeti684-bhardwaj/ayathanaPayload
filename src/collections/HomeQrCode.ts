import { CollectionConfig } from "payload/types";

const HomeQrcodeResponseAttributes: CollectionConfig = {
  slug: "HomeqrcodeResponse",
  admin: {
    useAsTitle: "image",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "image",
      type: "upload",
      required: true,
      relationTo: "media",
    },
  ],
};

export default HomeQrcodeResponseAttributes;
