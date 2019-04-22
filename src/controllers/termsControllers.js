
//have to build later
const TermsService = require('../services/TermsService');

function * TermsOfServiceContoller(req,res){
    res.json(yield TermsService.getTermOfService(res.termOfServiceId));
}

module.exports= {TermsOfServiceContoller};