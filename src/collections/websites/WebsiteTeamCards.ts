import { CollectionConfig } from 'payload/types'

const Websiteteamcard: CollectionConfig = {
  slug: 'websiteteamcard',
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
        name:'Designation',
        type: 'text', // required
    },
    {
        name:"teamImage",
        type:"upload",
        relationTo:"upload"
  },
//   {
//     name:"facebookimage",
//     type:"upload",
//     relationTo:"upload"
// },
// {
//     name:"whatsappimage",
//     type:"upload",
//     relationTo:"upload"
// },
// {
//     name:"linkedinimage",
//     type:"upload",
//     relationTo:"upload"
// },
// {
//     name:"twitterimage",
//     type:"upload",
//     relationTo:"upload"
// },
{
    name: "socilMediaImages",
    type: "array",
    fields: [
      {
        name: "socialMediaImage",
        type: "upload",
        relationTo: "upload",
      },
      {
        name: "socialMediaLink",
        type: "text",
       },
    ],
  },
// {
//     name:"facebooklink",
//     type:"text",
// },
// {
//     name:"facebooklink",
//     type:"text",
  
// },
// {
//     name:"facebooklink",
//     type:"text",
  
// },
// {
//     name:"facebooklink",
//     type:"text",
  
// },

   

   ],
}

export default Websiteteamcard