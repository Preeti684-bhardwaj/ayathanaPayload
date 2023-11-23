import { CollectionConfig } from "payload/types";

const OrganizationResponseAttributes: CollectionConfig = {
  slug: "organizationResponse",
  admin: {
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "type",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "logo",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "background",
      type: "relationship",
      relationTo: "media",
      required: true,
    },
    {
      name: "address",
      type: "relationship",
      required: true,
      relationTo: "addressResponse",
      hasMany:false // Adjust the relationTo value based on your configuration
    },
    {
      name: "deals",
      type: "relationship",
      required: true,
      relationTo: "dealResponse",
      hasMany:true // Adjust the relationTo value based on your configuration
    },
    {
      name: "contact",
      type: "relationship",
      required: true,
      relationTo: "contactResponse",
      hasMany:false // Adjust the relationTo value based on your configuration
    },
    {
      name: "highlights",
      type: "relationship",
      required: true,
      relationTo: "highlightResponse", 
      hasMany:true// Adjust the relationTo value based on your configuration
    },
    {
      name: "campaigns",
      type: "relationship",
      required: true,
      relationTo: "campaignResponse", 
      hasMany:true// Adjust the relationTo value based on your configuration
    },
    {
      name: "brand_story",
      type: "relationship",
      required: true,
      relationTo: "aboutSectionResponse",
      hasMany:true // Adjust the relationTo value based on your configuration
    },
    {
      name: "product_categories",
      type: "relationship",
      required: true,
      relationTo: "productCategoryResponse", 
      hasMany:true// Adjust the relationTo value based on your configuration
    },
    {
      name: "galleries",
      type: "relationship",
      required: true,
      relationTo: "galleryNewResponse",
      hasMany:true // Adjust the relationTo value based on your configuration
    },
    {
      name: "content_update",
      type: "relationship",
      required: true,
      relationTo: "contentUpdateResponse",
      hasMany:false // Adjust the relationTo value based on your configuration
    },
    {
      name: "banner_media",
      type: "array",
      fields: [
        {
          name: "image",
          type: "relationship",
          relationTo: "media",
        },
      ],
      required: true, // Adjust the relationTo value based on your configuration
    },
  ],
};

export default OrganizationResponseAttributes;
