import { CollectionConfig } from 'payload/types'

const Websitehome: CollectionConfig = {
  slug: 'websitehome',
  access: {
    read: () => true,
  },
  fields: [
  
    {
      name: 'heading', // required
     type: 'text', // required
    //  required: true,  
    },
      {
        name:'subheadingone',
        type: 'text', // required
       
      },
      {
        name:'subheadingtwo',
        type: 'text', // required
        // required: true,
      },
      {
        name:'description',
        type: 'text', // required
        // required: true, 
      },


      {
        name:'watchvideotext',
        type: 'text', // required
        // required: true, 
      },

      
     {
      name:'imagesection',
      type:"upload",
      relationTo:"upload"


    },
    {
      name:"videosection",
      type:"upload",
      relationTo:"upload"

    },
   
    
  ],
}

export default Websitehome