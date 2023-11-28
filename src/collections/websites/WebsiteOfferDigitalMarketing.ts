import { CollectionConfig } from 'payload/types'

const WebsiteoffersDigitalMarketing: CollectionConfig = {
  slug: 'WebsiteoffersDigitalMarketing',
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
    //  required: true,  
    },
    
      {
        name:"WebsiteoffersDigitalMarketingCard",
        type:"relationship",
        relationTo:"WebsiteoffersDigitalMarketingCard",
        hasMany: true,
  
      },
   
    
  ],
}

export default WebsiteoffersDigitalMarketing;