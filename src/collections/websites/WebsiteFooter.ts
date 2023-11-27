import { CollectionConfig } from 'payload/types'

const Websitefooter: CollectionConfig = {
  slug: 'Websitefooter',
  access: {
    read: () => true,
  },
  fields: [
  
   
      {
        name:'footerHeading',
        type: 'text', // required
       
      },
     
      {
        name:'footerText',
        type: 'text', // required
        // required: true, 
      },


    {
      name:'websitelogo',
      type:"upload",
      relationTo:"upload"
    },
   
   
    
  ],
}

export default Websitefooter