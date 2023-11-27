import { CollectionConfig } from 'payload/types'

const Websiteteam: CollectionConfig = {
  slug: 'websiteteam',
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
        name:"websiteTeamCard",
        type:"relationship",
        relationTo:"websiteteamcard",
        hasMany: true,
  
      },
   
    
  ],
}

export default Websiteteam