import { CollectionConfig } from "payload/types";

const AddressResponseAttributes: CollectionConfig = {
  slug: "addressResponse",
  admin: {
    useAsTitle: "address1",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "address1",
      type: "text",
      required: true,
    },
    {
      name: "address2",
      type: "text",
    },
    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "state",
      type: "text",
      required: true,
    },
    {
      name: "country",
      type: "text",
      required: true,
    },
    {
      name: "zipcode",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default AddressResponseAttributes;
