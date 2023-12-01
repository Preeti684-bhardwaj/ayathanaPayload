
import { CollectionConfig } from 'payload/types';

const ContentUpdateResponseAttributes: CollectionConfig = {
  slug: 'contentUpdateResponse',
  admin: {
    useAsTitle: "update_time",
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
      name: 'update_time',
      type: 'text',
      required: true,

    },
     ],
};

export default ContentUpdateResponseAttributes;
