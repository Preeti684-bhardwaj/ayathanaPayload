import { CollectionConfig } from 'payload/types';

const TemplateResponseAttributes: CollectionConfig = {
    slug: 'templateResponse',
    admin: {
        useAsTitle: "template_number_tag",
      },
      access: {
        read: () => true,
      },
      auth: {
        cookies:{
          secure:process.env.PAYLOAD_ENV!=='development',
          sameSite:process.env.PAYLOAD_ENV==='testing'?'none':'lax',
        }
      },
    fields: [
      {
        name: 'template_number_tag',
        type: 'number',
       required: true,
      },
       ],
  };
  
  export default TemplateResponseAttributes;
  