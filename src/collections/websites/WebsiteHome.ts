import { CollectionConfig } from 'payload/types'

const Websitehome: CollectionConfig = {
  slug: 'websiteHome',
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
        name:'subHeadingOne',
        type: 'text', // required
       
      },
      {
        name:'subHeadingTwo',
        type: 'text', // required
        // required: true,
      },
      {
        name:'Description',
        type: 'text', // required
        // required: true, 
      },


      {
        name:'watchvideotext',
        type: 'text', // required
        // required: true, 
      },

      
     {
      name:'imageSection',
      type:"upload",
      relationTo:"upload"


    },
    {
      name:"videoSection",
      type:"upload",
      relationTo:"upload"

    },
   
    
  ],
}

export default Websitehome