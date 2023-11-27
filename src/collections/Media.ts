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
    singular:'media',
    plural:'medias'
  },
//   access: {
//     read: () => true,
//   },
  fields:[]
}
export default Media