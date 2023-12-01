import { CollectionConfig } from 'payload/types';

const DealResponseAttributes: CollectionConfig = {
  slug: 'dealResponse',
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
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'media_list',
      type: 'upload',
      required: true,
      relationTo: 'media', // Adjust the relationTo value based on your data model
    },
   ],
};

export default DealResponseAttributes;
