import { CollectionConfig } from 'payload/types'

const WebsiteoffersDigitalMarketingCards: CollectionConfig = {
  slug: 'WebsiteoffersDigitalMarketingCard',
  admin: {
    useAsTitle: "Heading",
  },
  access: {
    read: () => true,
  },
  fields: [
  
    {
      name: 'Heading', // required
     type: 'text', // required
   
    },
    {
        name:"images",
        type:"upload",
        relationTo:"upload"
  },
 
  {
    name: "description",
    type: "array",
    fields: [
      {
        name: "descriptiontexts",
        type: "text",
        
      },
    ],
  },

    ],
}

export default WebsiteoffersDigitalMarketingCards