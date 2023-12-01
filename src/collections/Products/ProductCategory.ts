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
      name: "products",
      type: "relationship",
      required: true,
      relationTo: "productResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default ProductCategoryResponseAttributes;
