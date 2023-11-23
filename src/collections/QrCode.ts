import { CollectionConfig } from 'payload/types';

const QrcodeResponseAttributes: CollectionConfig = {
    slug: 'qrcodeResponse',
    auth: true,
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
  