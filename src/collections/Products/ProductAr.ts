import { CollectionConfig } from 'payload/types';

const ProductARResponseAttributes: CollectionConfig = {
  slug: 'productARResponse',
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
      name: 'title',
      type: 'text',
       required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
        required: true,
      relationTo: 'media',
    },
    {
      name: 'android_media_data',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
     ],
};

export default ProductARResponseAttributes;
