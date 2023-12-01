import { CollectionConfig } from 'payload/types';

// HotspotImagesResponseAttributes
const HotspotImagesResponseAttributes: CollectionConfig = {
  slug: 'hotspotImagesResponse',
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
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'hotspot_details',
      type: 'relationship',
      required: true,
      relationTo: 'hotspotDetailsResponse',
    },
    ],
};

export default HotspotImagesResponseAttributes;