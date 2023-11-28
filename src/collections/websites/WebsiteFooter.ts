import { CollectionConfig } from 'payload/types'

const Websitefooter: CollectionConfig = {
  slug: 'WebsiteFooter',
  access: {
    read: () => true,
  },
  fields: [
  
   
      {
        name:'footerHeading',
        type: 'text', // required
       
      },
     
      {
        name:'footerBottomText',
        type: 'text', // required
        // required: true, 
      },


    {
      name:'websitelogo',
      type:"upload",
      relationTo:"upload"
    },
    {
      name:'websitelogoalternativetext',
      type:'text'
    },
    {
      name: "socilMediaIcons",
      type: "array",
      fields: [
        {
          name: "socialMediaIcon",
          type: "upload",
          relationTo: "upload",
        },
        {
          name: "socialMediaLink",
          type: "text",
         },
      ],
    },
    
   
   
    
  ],
}

export default Websitefooter