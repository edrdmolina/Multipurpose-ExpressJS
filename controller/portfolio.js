const Visit = require('../models/portfolio-models/portfolioVisits');
const { cleanIp } = require('../middleware/helpers');

module.exports = {
    async addVisit(req, res) {
        const ipAddress = cleanIp(req.ip);
	    const software = req.headers['user-agent'];
        const prevVisit = await Visit.findOne({ ipAddress });
        if(prevVisit) {
            prevVisit.visitCount++;
            prevVisit.lastVisit = Date();
            prevVisit.save()
            return res.status(200).json(prevVisit);
        } else {
            const newVisit = await new Visit({
                ipAddress, software, 
                visitCount: 1, lastVisit: Date()
            })
            newVisit.save()
            return res.status(200).json(newVisit);
        }
    }
}