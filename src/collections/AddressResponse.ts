import { CollectionConfig } from "payload/types";

const AddressResponseAttributes: CollectionConfig = {
  slug: "addressResponse",
  auth: true,
  fields: [
    {
      name: "address1",
      type: "text",
      required: true,
    },
    {
      name: "address2",
      type: "text",
      required: true,
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
      type: "relationship",
      relationTo: "media",
      required: true,
    },
  ],
};

export default AddressResponseAttributes;
