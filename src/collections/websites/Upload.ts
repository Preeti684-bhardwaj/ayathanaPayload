import { CollectionConfig } from 'payload/types'

const Upload: CollectionConfig = {
  slug: 'upload',
  access: {
    read: () => true,
  },
  upload:true,
  labels:{
    singular:'upload',
    plural:'uploads'
  },
 fields:[]
}
export default Upload