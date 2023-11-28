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
  fields:[]
}
export default Media