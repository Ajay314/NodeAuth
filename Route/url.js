const express = require('express');
const { handleGenerateNewShortURL , handleGetAnalytics } = require("../Controller/url");
const URL = require("../Model/url");
const router = express.Router();

router.post("/" , handleGenerateNewShortURL);

router.get("/:shortId" , async(req,res) =>{
    const shortId = req.params.shortId;
   const entry =  await URL.findOneAndUpdate(
    {
        shortId,
    },{
        $push : {
            visitHistory : {
                timestamp : Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL);
})

router.get("/analytics/:shortid",handleGetAnalytics)

module.exports = router;