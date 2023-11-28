import { CollectionConfig } from 'payload/types'

const Websiteclient: CollectionConfig = {
  slug: 'websiteClient',
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
          {
            name:"alternativeText",
            type:"text"

          }
        ],
      },
   ],
}

export default Websiteclient