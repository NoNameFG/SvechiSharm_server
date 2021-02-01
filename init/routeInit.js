const admin_auth_router = require('./../routes/admin/adminAuth.js'),
      admin_panel_router = require('./../routes/admin/adminPanel.js'),
      auth_middleware = require('./../middleware/checkAdminAuth.js')

const route_init = (app, base_url) => {
  app.use(base_url + '/admin', admin_auth_router)
  app.use(base_url + '/admin', auth_middleware.checkAuth, admin_panel_router)
}

module.exports = route_init
