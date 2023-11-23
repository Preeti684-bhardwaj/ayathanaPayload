import { CollectionConfig } from "payload/types";

const ProductExteriorResponseAttributes: CollectionConfig = {
  slug: "productExteriorResponse",
  auth: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default ProductExteriorResponseAttributes;
