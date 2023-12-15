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
      name: "description",
      type: "array",
      fields:[
        {
          name:'points',
          type:'text'
        },
      ],
      required: true,

    },
    {
      name: "order",
      type: "number",
      required: true,
    },
    {
      name: 'dealmedia_list',
      type: "relationship",
      relationTo: "media",
      hasMany:true // Adjust the relationTo value based on your data model
    },
    {
      name: "qrcode",
      type: "relationship",
      relationTo: "qrcodeResponse",
    },
   ],
};

export default DealResponseAttributes;
