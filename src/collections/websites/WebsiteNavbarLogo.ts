import { CollectionConfig } from 'payload/types'

const Websitenavbarlogo: CollectionConfig = {
  slug: 'websiteNavbarLogo',
  access: {
    read: () => true,
  },
  fields: [
  
     {
      name:'navbarLogo',
      type:"upload",
      relationTo:"upload"


    },
    {
      name:"navbarLogoAlternativeText",
      type:"text"
    },
    
    
  ],
}

export default Websitenavbarlogo