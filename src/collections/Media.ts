import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  upload:true,
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