import { CollectionConfig } from 'payload/types';

const QrcodeResponseAttributes: CollectionConfig = {
    slug: 'qrcodeResponse',
    admin: {
        useAsTitle: "image",
      },
      access: {
          read: () => true,
        },
        auth: {
          verify: {
            generateEmailHTML: ({ req, token, user }) => {
              // Use the token provided to allow your user to verify their account
              const url = `https://ayathanapayload.payloadcms.app/verify?token=${token}`
      
              return `Hey ${user.email}, verify your email by clicking here: ${url}`
            },
          },
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
  