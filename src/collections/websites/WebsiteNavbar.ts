import { CollectionConfig } from 'payload/types'

 const Websitenavbar: CollectionConfig = {
  slug: 'Websitenavbar',
  access: {
    read: () => true,
  },
  fields: [
    {
      name:'id',
      type: 'number', 
    },
  
    {
      name: 'idnm', // required
     type: 'text', // required
   
    },
   
      {
        name:'navheading',
        type: 'text', // required
       
      },
     
    
  ],
}
export default Websitenavbar