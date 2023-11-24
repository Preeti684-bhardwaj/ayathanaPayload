import { CollectionConfig } from 'payload/types';

const TemplateResponseAttributes: CollectionConfig = {
    slug: 'templateResponse',
    admin: {
        useAsTitle: "template_number_tag",
      },
      access: {
        read: () => true,
      },
    auth: true,
    fields: [
      {
        name: 'template_number_tag',
        type: 'number',
       required: true,
      },
       ],
  };
  
  export default TemplateResponseAttributes;
  