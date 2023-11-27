import { CollectionConfig } from 'payload/types'

const Websitenavbarlogo: CollectionConfig = {
  slug: 'websitenavbarlogo',
  access: {
    read: () => true,
  },
  fields: [
  
     {
      name:'navbarLogo',
      type:"upload",
      relationTo:"upload"


    },
    
    
  ],
}

export default Websitenavbarlogo