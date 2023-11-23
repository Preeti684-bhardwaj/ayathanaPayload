import { CollectionConfig } from 'payload/types';

// HotspotImagesResponseAttributes
const HotspotImagesResponseAttributes: CollectionConfig = {
  slug: 'hotspotImagesResponse',
auth: true,
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