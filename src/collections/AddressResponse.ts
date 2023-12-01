import { CollectionConfig } from "payload/types";

const AddressResponseAttributes: CollectionConfig = {
  slug: "addressResponse",
  admin: {
    useAsTitle: "address1",
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
      name: "address1",
      type: "text",
      required: true,
    },
    {
      name: "address2",
      type: "text",
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "state",
      type: "text",
      required: true,
    },
    {
      name: "country",
      type: "text",
      required: true,
    },
    {
      name: "zipcode",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default AddressResponseAttributes;
