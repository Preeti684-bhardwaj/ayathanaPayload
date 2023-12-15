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
      type: "array",
      fields:[
        {
          name:'points',
          type:'text'
        },
      ],
      required: true,

    },
    {
      name: "thumbnail",
      type: "relationship",
      relationTo: "media",
    },
    {
      name:"product_exterior_img",
      type:"relationship",
      required:true,
      relationTo:'productExteriorResponse',
      hasMany:true
    }
  ],
};

export default ColourPaletteResponseAttributes;
