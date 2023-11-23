import { CollectionConfig } from 'payload/types';

const HotspotResponseAttributes: CollectionConfig = {
    slug: 'hotspotResponse',
    admin: {
        useAsTitle: "title",
      },
    auth: true,
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
  