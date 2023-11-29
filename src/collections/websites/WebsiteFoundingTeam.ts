import { CollectionConfig } from 'payload/types'

const WebsiteFoundingTeam: CollectionConfig = {
  slug: 'WebsiteFoundingTeam',
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
        name:"WebsiteFoundingTeamCardSection",
        type:"relationship",
        relationTo:"websiteTeamCard",
        hasMany: true,
  
      },
      
   
    
  ],
}

export default WebsiteFoundingTeam