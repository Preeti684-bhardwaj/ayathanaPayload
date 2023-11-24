
import { CollectionConfig } from 'payload/types';

const ContentUpdateResponseAttributes: CollectionConfig = {
  slug: 'contentUpdateResponse',
  admin: {
    useAsTitle: "update_time",
  },
  access: {
      read: () => true,
    },
auth: true,
  fields: [
    {
      name: 'update_time',
      type: 'text',
      required: true,

    },
     ],
};

export default ContentUpdateResponseAttributes;
