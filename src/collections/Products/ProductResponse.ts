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
    verify: {
      generateEmailHTML: ({ req, token, user }) => {
        // Use the token provided to allow your user to verify their account
        const url = `https://ayathanapayload.payloadcms.app/verify?token=${token}`

        return `Hey ${user.email}, verify your email by clicking here: ${url}`
      },
    },
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
      type: "relationship",
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