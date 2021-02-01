const Router = require('express').Router,
      AdminController = require('../../controllers/admin.js')

const router = Router();

router.route('/product')
  .post((req, resp) => {
    AdminController.add_product(req, resp)
  })

router.route('/product/list')
  .get((req, resp) => {
    AdminController.get_product_list(req, resp)
  })

router.route('/product/image')
  .get((req, resp) => {
    AdminController.get_image_by_id(req, resp)
  })

module.exports = router;
