const config = require('../config/config.json')

class CheckAdminAuthMiddleware {
  checkAuth(req, resp, next){
    if(!req.headers['admin'] || req.headers['admin'].split(' ')[1] != `${config.siteAuth.login}:${config.siteAuth.password}`){
      resp.status(401).json({message: 'Dennied'})
      return;
    }
    next();
  }
}

module.exports = new CheckAdminAuthMiddleware();
