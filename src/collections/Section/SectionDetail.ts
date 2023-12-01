import { CollectionConfig } from 'payload/types';

// SectionDetailResponseAttributes
const SectionDetailResponseAttributes: CollectionConfig = {
  slug: 'sectionDetailResponse',
  admin: {
    useAsTitle: "title",
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