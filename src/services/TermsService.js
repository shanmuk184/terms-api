const TermsModel = require('../models/TermsModel');

function * TermsService(TermsOfServiceId){
    yield TermsModel.getTermsOfService(TermsOfServiceId); 
}
module.exports = {TermsService};

