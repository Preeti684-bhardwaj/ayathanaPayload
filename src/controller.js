import express from "express";
const router = express.Router()
import payload from 'payload'


router.get("/api/organization/:organizationId/data" , async (req, res) => {
    try {
      const { organizationId } = req.params;
      const {keyWord}=req.query;
      // Find the organization by ID
    //   console.log(keyWord)
      const organization = await payload.findByID({
        collection:'organizationResponse',
        id:organizationId,
      });
      if (!organization) {
          return res.status(404).json({ error: 'Organization not found' });
        }
      const datafield=organization[keyWord];
    //   console.log(datafield)
      res.send({success:true, data:datafield})
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } )

  export default router