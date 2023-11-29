import { CollectionConfig } from 'payload/types'

const WebsiteAdvisoryBoardTeam: CollectionConfig = {
  slug: 'WebsiteAdvisoryBoardTeam',
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
        name:"WebsiteAdvisoryTeamCardSection",
        type:"relationship",
        relationTo:"websiteTeamCard",
        hasMany: true,
  
      },
      
   
    
  ],
}

export default WebsiteAdvisoryBoardTeam