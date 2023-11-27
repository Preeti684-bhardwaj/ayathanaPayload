import { CollectionConfig } from 'payload/types'

const Websiteoffercard: CollectionConfig = {
  slug: 'websiteoffercard',
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
   
    },
      {
        name:'Description',
        type: 'text', // required
    },
    {
        name:"Icon",
        type:"upload",
        relationTo:"upload"
  },
 
  {
    name:'AlternativeTextOfIcon',
    type: 'text', // required
},

    ],
}

export default Websiteoffercard