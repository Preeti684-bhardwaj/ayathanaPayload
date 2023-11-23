import { CollectionConfig } from 'payload/types';

const HotspotDetailsResponseAttributes: CollectionConfig = {
    slug: 'hotspotDetailsResponse',
   auth: true,
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