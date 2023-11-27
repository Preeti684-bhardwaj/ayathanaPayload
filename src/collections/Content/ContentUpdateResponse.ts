
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
        cookies:{
          secure:process.env.PAYLOAD_ENV!=='development',
          sameSite:process.env.PAYLOAD_ENV==='testing'?'none':'lax',
        }
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
