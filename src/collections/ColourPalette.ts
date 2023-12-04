import { CollectionConfig } from "payload/types";


const ColourPaletteResponseAttributes: CollectionConfig = {
  slug: "colourPaletteResponse",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "relationship",
      required: true,
      relationTo: "media",
    },
  ],
};

export default ColourPaletteResponseAttributes;
