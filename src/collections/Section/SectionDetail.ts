import { CollectionConfig } from 'payload/types';

// SectionDetailResponseAttributes
const SectionDetailResponseAttributes: CollectionConfig = {
  slug: 'sectionDetailResponse',
  auth: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'tag',
      type: 'text',
     required: true,
    },
    {
      name: 'qrcode',
      type: 'relationship',
      required: true,
      relationTo: 'qrcodeResponse',
    },
    {
      name: 'template',
      type: 'relationship',
required: true,
      relationTo: 'templateResponse',
    },
     ],
};
export default SectionDetailResponseAttributes