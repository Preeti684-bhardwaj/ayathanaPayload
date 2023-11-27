import { CollectionConfig } from 'payload/types'

const Websiteclient: CollectionConfig = {
  slug: 'websiteclient',
  access: {
    read: () => true,
  },
  fields: [

    {
        name: 'Heading', // required
       type: 'text', // required
      
      },
  
    {
      name: 'Description', // required
     type: 'text', // required
    
    },
     
    {
        name: "images",
        type: "array",
        fields: [
          {
            name: "clientLogos",
            type: "upload",
            relationTo: "upload",
          },
        ],
      },
   ],
}

export default Websiteclient