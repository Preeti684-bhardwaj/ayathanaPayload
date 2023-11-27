import { CollectionConfig } from "payload/types";

const ProductCategoryResponseAttributes: CollectionConfig = {
  slug: "productCategoryResponse",
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
      name: "products",
      type: "relationship",
      required: true,
      relationTo: "productResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default ProductCategoryResponseAttributes;
