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