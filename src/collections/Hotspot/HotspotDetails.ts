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
        cookies:{
          secure:process.env.PAYLOAD_ENV!=='development',
          sameSite:process.env.PAYLOAD_ENV==='testing'?'none':'lax',
        }
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