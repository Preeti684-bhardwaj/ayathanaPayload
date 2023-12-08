
import { CollectionConfig } from 'payload/types';

const ContentUpdateResponseAttributes: CollectionConfig = {
  slug: 'contentUpdateResponse',
  admin: {
    useAsTitle: "update_time",
  },
  access: {
      read: () => true,
    },
  fields: [
    {
      name: 'update_date',
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
        },
      },
      required: true,
    },
    {
      name: "update_time",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "timeOnly"
        },
      },
      required: true,
    },
    {
      name: "organization",
      type: "relationship",
      relationTo: "organizationResponse",
      hasMany: false,
    },
     ],
};

export default ContentUpdateResponseAttributes;
