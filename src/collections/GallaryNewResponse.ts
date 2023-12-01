import { CollectionConfig } from "payload/types";

const GalleryNewResponseAttributes: CollectionConfig = {
  slug: "galleryNewResponse",
  admin: {
    useAsTitle: "media_data",
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
      name: "media_data",
      type: "upload",
      required: true,
      relationTo: "media", // Adjust the relationTo value based on your data model
    },
  ],
};

export default GalleryNewResponseAttributes;
