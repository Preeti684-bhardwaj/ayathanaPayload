import { CollectionConfig } from "payload/types";

const AboutSectionResponseAttributes: CollectionConfig = {
  slug: "aboutSectionResponse",
  admin: {
    useAsTitle: "tabTitle",
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
      name: "tabTitle",
      type: "text",
      required: true,
    },
    {
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: "content",
      type: "relationship",
      required: true,
      relationTo: "aboutContentResponse",
      hasMany:true // Adjust the relationTo value based on your data model
    },
  ],
};

export default AboutSectionResponseAttributes;
