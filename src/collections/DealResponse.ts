import { CollectionConfig } from 'payload/types';

const DealResponseAttributes: CollectionConfig = {
  slug: 'dealResponse',
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
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
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: 'media_list',
      type: "relationship",
      required: true,
      relationTo: "media",
      hasMany:true // Adjust the relationTo value based on your data model
    },
   ],
};

export default DealResponseAttributes;
