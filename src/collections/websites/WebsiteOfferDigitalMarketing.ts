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
        name:"WebsiteoffersDigitalMarketingCards",
        type:"relationship",
        relationTo:"WebsiteoffersDigitalMarketingCards",
        hasMany: true,
  
      },
   
    
  ],
}

export default WebsiteoffersDigitalMarketing;