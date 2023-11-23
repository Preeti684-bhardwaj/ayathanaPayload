
import { CollectionConfig } from 'payload/types';

const ContentUpdateResponseAttributes: CollectionConfig = {
  slug: 'contentUpdateResponse',
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
