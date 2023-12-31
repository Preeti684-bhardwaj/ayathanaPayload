import { CollectionConfig } from 'payload/types';

const ProductARResponseAttributes: CollectionConfig = {
  slug: 'productARResponse',
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
       required: true,
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
      name: 'thumbnail',
      type: 'upload',
        required: true,
      relationTo: 'media',
    },
    {
      name: 'android_media_data',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
     ],
};

export default ProductARResponseAttributes;
