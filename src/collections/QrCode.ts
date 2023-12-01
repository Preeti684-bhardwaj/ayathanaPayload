import { CollectionConfig } from 'payload/types';

const QrcodeResponseAttributes: CollectionConfig = {
    slug: 'qrcodeResponse',
    admin: {
        useAsTitle: "image",
      },
      access: {
          read: () => true,
          create:()=>true
        },
  
    fields: [
      {
        name: 'image',
        type: 'upload',
        required: true,
        relationTo: 'media',
      },
       ],
  };

  export default QrcodeResponseAttributes
  