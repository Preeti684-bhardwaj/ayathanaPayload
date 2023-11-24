import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: "name",
  },
  upload:true,
  access: {
    read: () => true,
  },
  labels:{
    singular:'upload',
    plural:'uploads'
  },
//   access: {
//     read: () => true,
//   },
  fields:[]
}
export default Media