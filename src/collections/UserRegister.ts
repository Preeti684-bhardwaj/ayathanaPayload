import { CollectionConfig } from 'payload/types'

const Register: CollectionConfig = {
  slug: 'register',
  auth: {
    cookies:{
      secure:process.env.PAYLOAD_ENV!=='development',
      sameSite:process.env.PAYLOAD_ENV==='testing'?'none':'lax',
    }
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
        name:"name",
        type:"text",
        label:'Full Name',
        required:true,
    },
    {
        name:"email",
        type:'email',
        label:'Email address',
        required:true,
    },
    {
        name:'phone',
        type:'text',
        label:'Phone Number',
        required:true
    },
    {
        name:'OTP',
        type:'text',
        label:'OTP',
        required:true
    }

  ],
}

export default Register
