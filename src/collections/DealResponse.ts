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
      name: "organization",
      type: "relationship",
      relationTo: "organizationResponse",
      hasMany: false,
    },
    {
      name: 'media_list',
      type: "array",
      fields: [
        {
          name: "image",
          type: "relationship",
          relationTo:"media",
          hasMany:true
        },
      ],
      required:true // Adjust the relationTo value based on your data model
    },
   ],
};

export default DealResponseAttributes;
