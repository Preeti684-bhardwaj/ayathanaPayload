import { CollectionConfig } from 'payload/types';

const HotspotDetailsResponseAttributes: CollectionConfig = {
    slug: 'hotspotDetailsResponse',
    admin: {
        useAsTitle: "hotspot",
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
        name: 'x',
        type: 'number',
       required: true,
      },
      {
        name: 'y',
        type: 'number',
       required: true,
      },
      {
        name: 'hotspot',
        type: 'relationship',
        required: true,
        relationTo: 'hotspotResponse',
      },
       ],
  };
  export default HotspotDetailsResponseAttributes;