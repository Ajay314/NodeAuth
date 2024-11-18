const shortId = require("shortid");
const URL = require('../Model/url');
const shortid = require("shortid");

async function handleGenerateNewShortURL(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({ error : "url is required "})   
    const shortId = shortid(8);
       await URL.create({
        shortId: shortId,
        redirectURL : body.url,
        visitedHistory:[]
       });
       return res.json({ id:shortId});
   
}

async function handleGetAnalytics(req,res) {
    const shortId = req.params.shortid;
   const result =  await URL.findOne({shortId})
   return res.json({ totalClicks : result.visitHistory.length , 
    analytics : result.visitHistory 
   })
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics
}