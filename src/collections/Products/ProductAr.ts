import { CollectionConfig } from 'payload/types';

const ProductARResponseAttributes: CollectionConfig = {
  slug: 'productARResponse',
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
