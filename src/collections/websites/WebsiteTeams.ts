import { CollectionConfig } from 'payload/types'

const Websiteteam: CollectionConfig = {
  slug: 'websiteTeam',
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
        name:"WebsiteFoundingTeamSection",
        type:"relationship",
        relationTo:"WebsiteFoundingTeam",
        hasMany: true,
  
      },
      {
        name:"WebsiteAdvisoryBoardTeamSection",
        type:"relationship",
        relationTo:"WebsiteAdvisoryBoardTeam",
        hasMany:true,

      },
   
    
  ],
}

export default Websiteteam