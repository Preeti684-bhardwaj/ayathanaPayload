import { CollectionConfig } from "payload/types";

const OrganizationResponseAttributes: CollectionConfig = {
  slug: "organizationResponse",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  auth:true,
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
      type: "upload",
      relationTo: "media",
    },
    {
      name: "logo",
      type: "upload",
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
      type: "upload",
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
      relationTo: "dealResponse",
      hasMany:true // Adjust the relationTo value based on your configuration
    },
    {
      name: "contact",
      type: "relationship",
      required: true,
      relationTo: "contactResponse",
      hasMany:false ,// Adjust the relationTo value based on your configuration
    },
    {
      name: "highlights",
      type: "relationship",
      relationTo: "highlightResponse", 
      hasMany:true// Adjust the relationTo value based on your configuration
    },
    {
      name: "campaigns",
      type: "relationship",
      relationTo: "campaignResponse", 
      hasMany:true// Adjust the relationTo value based on your configuration
    },
    {
      name: "brand_story",
      type: "relationship",
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
      relationTo: "galleryNewResponse",
      hasMany:true // Adjust the relationTo value based on your configuration
    },
    {
      name: "content_update",
      type: "relationship",
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
          relationTo:"media",
          hasMany:true
        },
      ], // Adjust the relationTo value based on your configuration
    },
  ],
};

export default OrganizationResponseAttributes;