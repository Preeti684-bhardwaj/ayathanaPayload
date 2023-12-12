import express from 'express'
import payload from 'payload'
import cors from 'cors'
import router from './controller'

require('dotenv').config()
const app = express()

app.use(cors())

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.use("/apps", router)

// Create a custom API endpoint to fetch galleries associated with a specific organization
// app.get('/api/organization/:organizationId/data', async (req, res) => {
//   try {
//     const { organizationId } = req.params;
//     const {keyWord}=req.query;
//     // Find the organization by ID
//     console.log(keyWord)
//     const organization = await payload.findByID({
//       collection:'organizationResponse',
//       id:organizationId,
//     });
//     const datafield=organization[keyWord];
//     console.log(datafield)
//     res.send({success:true, data:datafield})

//     // if (!organization) {
//     //   return res.status(404).json({ error: 'Organization not found' });
//     // }

//     // // Extract gallery IDs from the organization's galleries relationship
//     // const galleryIds = organization.galleries || [];

//     // // Find galleries based on the extracted IDs
//     // const galleries = await payload.find({
//     //   _id: { $in: galleryIds },
//     // });

//     // res.json(galleries);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
}

start()
