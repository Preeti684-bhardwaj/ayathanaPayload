import { CollectionConfig } from 'payload/types';

const TemplateResponseAttributes: CollectionConfig = {
    slug: 'templateResponse',
    admin: {
        useAsTitle: "Temlate name",
      },
      access: {
        read: () => true,
      },
    fields: [
      {
        name: "Temlate_name",
        type: "text",
        required: true,
        unique:true
      },
      {
        name: 'template_number_tag',
        type: 'number',
       required: true,
      },
       ],
  };
  
  export default TemplateResponseAttributes;
  