import { CollectionConfig } from 'payload/types'

const Websiteoffer: CollectionConfig = {
  slug: 'websiteoffer',
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
        name:"websiteOfferCard",
        type:"relationship",
        relationTo:"websiteoffercard",
        hasMany: true,
  
      },
   
    
  ],
}

export default Websiteoffer