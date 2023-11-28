import { CollectionConfig } from 'payload/types'

const WebsiteofferBrandStrategy: CollectionConfig = {
  slug: 'WebsiteoffersBrandStrategy',
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
        name:'Description',
        type: 'text', // required
       
      },
      {
        name:"WebsiteofferBrandStrategycard",
        type:"relationship",
        relationTo:"WebsiteoffersBrandStrategycard",
        hasMany: true,
  
      },
   
    
  ],
}

export default WebsiteofferBrandStrategy