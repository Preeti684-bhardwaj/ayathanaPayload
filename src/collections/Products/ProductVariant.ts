import { CollectionConfig } from "payload/types";

const ProductVariantResponseAttributes: CollectionConfig = {
  slug: "productVariantResponse",
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
      name: "size",
      type: "text",
      required: true,
    },
    {
      name: "keyFeatures",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "upload",
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
    {
      name: "media_list",
      type: "upload",
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
    {
      name: "colour_palette_list",
      type: "relationship",
      required: true,
      relationTo: "colourPaletteResponse", // Adjust the relationTo value based on your data model
    },
    {
      name: "hotspot_images",
      type: "relationship",
      required: true,
      relationTo: "hotspotImagesResponse", // Adjust the relationTo value based on your data model
    },
    {
      name: "product_exterior_images",
      type: "relationship",
      required: true,
      relationTo: "productExteriorResponse", // Adjust the relationTo value based on your data model
    },
    {
      name: "experience_3_ds",
      type: "relationship",
      required: true,
      relationTo: "productARResponse", // Adjust the relationTo value based on your data model
    },
    {
      name: "price",
      type: "text",
      required: true,
    },
    {
      name: "original_price",
      type: "text",
      required: true,
    },
    {
      name: "additional_info",
      type: "text",
      required: true,
    },
  ],
};

export default ProductVariantResponseAttributes;
