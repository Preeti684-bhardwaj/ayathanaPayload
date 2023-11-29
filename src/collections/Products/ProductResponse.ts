import { CollectionConfig } from "payload/types";

const ProductResponseAttributes: CollectionConfig = {
  slug: "productResponse",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  auth: {
    cookies:{
      secure:process.env.PAYLOAD_ENV!=='development',
      sameSite:process.env.PAYLOAD_ENV==='testing'?'none':'lax',
    }
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
      name: "thumbnail",
      type: "upload",
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
    {
      name: "product_variants",
      type: "relationship",
      required: true,
      relationTo: "productVariantResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
    {
      name: "qrcode",
      type: "relationship",
      required: true,
      relationTo: 'qrcodeResponse',
      hasMany:false// Adjust the relationTo value based on your data model
    }
  ],
};

export default ProductResponseAttributes;