import express from "express";
const router = express.Router();

router.get('/', (req,res) => {
    res.send("External API working fine");
})

export default router;