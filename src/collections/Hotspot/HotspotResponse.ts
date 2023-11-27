import { CollectionConfig } from 'payload/types';

const HotspotResponseAttributes: CollectionConfig = {
    slug: 'hotspotResponse',
    admin: {
        useAsTitle: "title",
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
        name: 'image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
       ],
  };
  
export default HotspotResponseAttributes;
  