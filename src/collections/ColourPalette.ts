import { CollectionConfig } from "payload/types";

const ColourPaletteResponseAttributes: CollectionConfig = {
  slug: "colourPaletteResponse",
  auth: true,
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
      type: "upload",
      required: true,
      relationTo: "media",
    },
  ],
};

export default ColourPaletteResponseAttributes;
