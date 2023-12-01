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
        name: 'template_number_tag',
        type: 'number',
       required: true,
      },
       ],
  };
  
  export default TemplateResponseAttributes;
  